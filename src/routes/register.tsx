import { createFileRoute } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import { z } from 'zod'

export const Route = createFileRoute('/register')({
  component: RegisterForm,
})

const schema = z.object({
  // profile user creation schema
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits long'),
  address: z.string().min(1, 'Address is required'),
  role: z.enum(['customer', 'admin', 'courier'], {
    required_error: 'Role is required',
  }),
})
type FormData = z.infer<typeof schema>
const validateField = <T,>(value: T, fieldSchema: z.ZodSchema<T>) => {
  const result = fieldSchema.safeParse(value)
  if (!result.success) {
    return result.error.errors.map((err) => err.message)
  }
  return []
}

const getErrorMessage = (error: any): string => {
  if (typeof error === 'string') return error
  if (error && typeof error === 'object' && 'message' in error)
    return error.message
  return String(error)
}

function RegisterForm() {
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      address: '',
      role: 'customer',
    } as FormData,
    validators: {
      onBlur: schema,
    },
    onSubmit: ({ value }) => {
      console.log(value)
      // Show success message
      alert('Account created successfully!')
    },
  })

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-4">
      <div className="w-full max-w-lg p-8 rounded-xl backdrop-blur-md bg-white/50 shadow-xl border-8 border-white/10">
        <h1 className="text-2xl mb-6 font-bold text-center">Register</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <form.Field
              name="firstName"
              validators={{
                onChange: ({ value }) =>
                  validateField(value, schema.shape.firstName),
                onBlur: ({ value }) =>
                  validateField(value, schema.shape.firstName),
              }}
              children={(field) => (
                <div>
                  <label className="block mb-1 font-semibold">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Enter your first name"
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-red-500 text-sm mt-1">
                      {getErrorMessage(field.state.meta.errors[0])}
                    </p>
                  )}
                </div>
              )}
            />
            <form.Field
              name="lastName"
              validators={{
                onChange: ({ value }) =>
                  validateField(value, schema.shape.lastName),
                onBlur: ({ value }) =>
                  validateField(value, schema.shape.lastName),
              }}
              children={(field) => (
                <div>
                  <label className="block mb-1 font-semibold">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Enter your last name"
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-red-500 text-sm mt-1">
                      {getErrorMessage(field.state.meta.errors[0])}
                    </p>
                  )}
                </div>
              )}
            />
            <form.Field
              name="email"
              validators={{
                onChange: ({ value }) =>
                  validateField(value, schema.shape.email),
                onBlur: ({ value }) => validateField(value, schema.shape.email),
              }}
              children={(field) => (
                <div>
                  <label className="block mb-1 font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Enter your email"
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-red-500 text-sm mt-1">
                      {getErrorMessage(field.state.meta.errors[0])}
                    </p>
                  )}
                </div>
              )}
            />
            <form.Field
              name="password"
              validators={{
                onChange: ({ value }) =>
                  validateField(value, schema.shape.password),
                onBlur: ({ value }) =>
                  validateField(value, schema.shape.password),
              }}
              children={(field) => (
                <div>
                  <label className="block mb-1 font-semibold">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Enter your password"
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-red-500 text-sm mt-1">
                      {getErrorMessage(field.state.meta.errors[0])}
                    </p>
                  )}
                </div>
              )}
            />
            <form.Field
              name="phone"
              validators={{
                onChange: ({ value }) =>
                  validateField(value, schema.shape.phone),
                onBlur: ({ value }) => validateField(value, schema.shape.phone),
              }}
              children={(field) => (
                <div>
                  <label className="block mb-1 font-semibold">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Enter your phone number"
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-red-500 text-sm mt-1">
                      {getErrorMessage(field.state.meta.errors[0])}
                    </p>
                  )}
                </div>
              )}
            />
            <form.Field
              name="address"
              validators={{
                onChange: ({ value }) =>
                  validateField(value, schema.shape.address),
                onBlur: ({ value }) =>
                  validateField(value, schema.shape.address),
              }}
              children={(field) => (
                <div>
                  <label className="block mb-1 font-semibold">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Enter your address"
                  />
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-red-500 text-sm mt-1">
                      {getErrorMessage(field.state.meta.errors[0])}
                    </p>
                  )}
                </div>
              )}
            />
            <form.Field
              name="role"
              validators={{
                onChange: ({ value }) =>
                  validateField(value, schema.shape.role),
                onBlur: ({ value }) => validateField(value, schema.shape.role),
              }}
              children={(field) => (
                <div>
                  <label className="block mb-1 font-semibold">Role</label>
                  <select
                    name="role"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value as any)}
                    onBlur={field.handleBlur}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                    <option value="courier">Courier</option>
                  </select>
                  {field.state.meta.errors.length > 0 && (
                    <p className="text-red-500 text-sm mt-1">
                      {getErrorMessage(field.state.meta.errors[0])}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
