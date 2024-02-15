import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-9 py-22 lg:px-8">
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-blue-900 rounded-md shadow-md lg:max-w-xl">
       
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="logo.png"
            alt=""
          />
          <h2 className="mt-7 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          <div className='  rounded-lg inline-block'>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADXUlEQVR4nO1YT0gVQRhfyaQuInXQsENSQR6CihKp8B2Cerz9vl2lHgVZ3uwkXSLo4jWh0IsGRUXdyovHPJRSYHawnjuzT0yI/khdggiMDql9Mfvm7R/d3Wf1Vt8+3g8Gdnd+M9/vNzPf7OwqSgVlDMqojWQkdypxBXHtHHE4q8QVxHCIGA4qcQUxyIqixBFk6PuJI1nFTB1Q4gZicNc2wOGeEieQobURw9+2AXFtaG0bI4bhKDEYIxO7aDxRXZBvphqI47wz+nkT8EnUFWw/nqi2YomYDEf/34ABh4jjohSRFfeB3JfprcRhkhh+JQ4XHAPqRflsUnBCYzHIynaLYbH+zgTDQdd6/kkMO/15cIs4XqeZ9u00nN5kt7FG9eQ2q47hUECMTqtvZ9n58v7VQD0xWPAuC7hJpFQFtpnq3uzsQumaQB4pVcTwxorltiBiFs2AFYhDX04MdhGH02JnIY5XA/lzyVpb0FyyNqTfK8TxPpnqGWup5Qanr6jirUAm7sntLDArRrcgfxqbbAPT2FSQPyVmDGatGFl1b9GEe4JweJ6fhTVwjzhLQjtckG+KmbX4L4omeFUQht1yjZph619yOx0D6vlQLok8AFP2fanowj3LyE5MtSWUy7DftaP0h3INbHWSuH130YV7guVfUgwGwnkw6dpVXoVyGQxI7nzRBfsIeyyDvQv9kGGw7DlKZNTG4D7xreQ9iky4HYxBry1spmOHPwd77Lcph19SXI8vN6PX2ecmBr3RG7D2azs5O/wNwIQUNEYMnsnrCV+uASdcu1U6egPuhPMZMcpqB52E1C7nSvB2Sgyv2fUGtkZvgME+13Fi2Kf+gTS3TBl9l1Xy+cDw4So+h2Gnv1TzOhjAete55bVXTKrZPrlyHHGe44g0vCS+1Lz9wRvXl1tD9AbMdI1rBr6vEPPEqdOPOm3UFpfpp542HL/Zde8TWyI3EHuQ+1MxikLhR5QKIp0Fqox+YVRyoBRAzuHri3XP1VPiLes5gQYWWLL+2jFI5PqCz+ueA/KvwUcyUPc8NzUt1ISoMzXN08ZAnRh+II4/SiKJicPtEAN3lFIHcTwWaMCE40qpg9z/g1aWjF630frKH1ToLV0KiVrWBsoCtOpPdsxGnyoGNhixn4EKlLXjD3SUECPwt2D5AAAAAElFTkSuQmCC"/>
            </div>
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6"  >
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                 
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-white hover:text-white">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
            <Link href='/'>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              </Link>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-100">
            Not a member?{' '}
            <a href="/Signup" className="font-semibold leading-6 text-white hover:text-indigo-500">
              Start Now
            </a>
          </p>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}
