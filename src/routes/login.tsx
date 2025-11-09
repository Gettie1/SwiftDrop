import { useForm } from '@tanstack/react-form'
import { Link, createFileRoute, useRouter } from '@tanstack/react-router'
import { z } from 'zod'
import { toast } from 'sonner'
import { useLogin } from '@/hooks/auth'
import { authActions } from '@/store/authStore'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})
const formSchema = z.object({
  email: z
    .string()
    .email('Enter a valid email address')
    .min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
})
type FormData = z.infer<typeof formSchema>

function validateField<T>(value: T, schema: z.ZodSchema<T>) {
  const result = schema.safeParse(value)
  if (!result.success) {
    return result.error.errors.map((err) => err.message)
  }
  return []
}

function RouteComponent() {
  const mutate = useLogin()
  const router = useRouter()
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    } as FormData,
    onSubmit: ({ value }) => {
      mutate.mutate(value, {
        onSuccess: (data) => {
          authActions.setUser({
            isAuthenticated: data.isAuthenticated,
            user: data.user,
            access_token: data.access_token,
            refresh_token: data.refresh_token,
          })
          toast.success(`Login successful!, Welcome, ${data.user.username}!`)
          router.navigate({ to: '/dashboard/dashboard/' as any })
        },
        onError: (error) => {
          alert(`Login failed: ${error.message}`)
          toast.error(`Login failed: ${error.message}`)
        },
      })
    },
  })

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-4">
      <div className="w-full max-w-md p-8 rounded-xl backdrop-blur-md bg-white/50 shadow-xl border-8 border-white/10">
        <h1 className="text-2xl mb-4 font-bold text-center">Login</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
          className="space-y-4"
        >
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) =>
                validateField(value, formSchema.shape.email),
              onBlur: ({ value }) =>
                validateField(value, formSchema.shape.email),
            }}
            children={(field) => (
              <div>
                <label className="block mb-1 font-semibold">Email</label>
                <input
                  type="email"
                  value={field.state.value}
                  name="email"
                  id="email"
                  onBlur={field.handleBlur}
                  onChange={(e) => field.setValue(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
                {field.state.meta.errors.length > 0 && (
                  <div className="text-red-500 text-sm mt-1">
                    {field.state.meta.errors[0]}
                  </div>
                )}
              </div>
            )}
          />
          <form.Field
            name="password"
            validators={{
              onChange: ({ value }) =>
                validateField(value, formSchema.shape.password),
              onBlur: ({ value }) =>
                validateField(value, formSchema.shape.password),
            }}
            children={(field) => (
              <div>
                <label className="block mb-1 font-semibold">Password</label>
                <input
                  type="password"
                  value={field.state.value}
                  name="password"
                  id="password"
                  onBlur={field.handleBlur}
                  onChange={(e) => field.setValue(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
                {field.state.meta.errors.length > 0 && (
                  <div className="text-red-500 text-sm mt-1">
                    {field.state.meta.errors[0]}
                  </div>
                )}
              </div>
            )}
          />
          <div className="">
            <form.Subscribe
              selector={(state) => [state.isValid, state.isSubmitting]}
              children={([isValid, isSubmitting]) => (
                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className={`w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors ${
                    (!isValid || isSubmitting) &&
                    'opacity-50 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
              )}
            />
          </div>
        </form>
        <div className="mt-4">
          <p className="text-center text-gray-600">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="text-blue-500 hover:underline font-semibold"
            >
              Register
            </Link>
          </p>
          {/* <p className="text-center text-gray-600">
            Forgot your password?{' '}
            <Link
              to="/reset-password"
              className="text-purple-600 hover:underline font-semibold"
            >
              Reset Password
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  )
}
