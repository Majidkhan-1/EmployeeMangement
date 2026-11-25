import React from "react";
import { useAuth } from "../../hook/useAuth";
import {useWatch} from 'react-hook-form'


const Register = () => {

  
  let {register,handleSubmit,onRegisterSubmit,errors,nav,control} = useAuth();

  const password = useWatch({
    control,
    name: "password",
  });

  const getPasswordStrength = () => {
    if (!password) {
      return {
        score: 0,
        text: "",
      };
    }

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const labels = {
      1: "Weak password",
      2: "Fair password",
      3: "Good password",
      4: "Strong password",
    };

    return {
      score,
      text: labels[score],
    };
  };

  const strength = getPasswordStrength();

  const onSubmit = (data) => {
    console.log("Registration Data:", data);

    // Navigation intentionally NOT handled here.
    // You can navigate wherever you want from here.
  };

  return (
    <div className="min-h-screen bg-[#141218] text-[#e6e0e9] font-['Inter']">

      {/* ================= HEADER ================= */}

      <header className="absolute top-0 left-0 z-50 px-6 py-5 md:px-8">
        <h1 className="text-xl font-bold tracking-tight">
          Synthetix AI
        </h1>
      </header>

      {/* ================= MAIN ================= */}

      <main className="flex min-h-screen">

        {/* ================= LEFT PANEL ================= */}

        <section
          className="
            relative hidden min-h-screen w-[40%]
            overflow-hidden border-r border-[#494551]/30
            bg-[#0f172a]
            md:flex md:flex-col md:justify-end
            px-12 pb-12
          "
        >

          {/* AI Background */}

          <div className="absolute inset-0">

            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKFssbCNBW8f-0tJgLllgAqAWDBNzNAy3bF5hZHj6AqDD0XL_akzAHMKZFk5xWYQCr3oSIZzV4OS7NZLkSQR6c-ww1c2h5EV8j_DX_4vZ9IeWDEVRbo697BVSHU-H4hr95r0PaC86EEhuuzAtjPVfxhuXT1cV2QpxAMeB_h_yELwhUs3PDszkwE2osVYRL8EbHGlrvBMAAw19qBCzcVr8KGwWB55RmaRlIKT-_tIv2KO6pLY79Dq6eYB0hTHWbcC2VvDIkov6jF2Av"
              alt="AI neural network"
              className="
                h-full w-full object-cover
                opacity-40
                mix-blend-luminosity
              "
            />

            {/* Gradient Overlay */}

            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-[#141218]
                via-transparent
                to-[#0f172a]/20
              "
            />

          </div>

          {/* Left Content */}

          <div className="relative z-10 space-y-6">

            {/* AI Badge */}

            <div className="flex items-center gap-2 text-[#cfbcff]">

              <span className="text-2xl">
                ✨
              </span>

              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                "
              >
                Next-Gen Intelligence
              </span>

            </div>

            {/* Heading */}

            <h2
              className="
                max-w-md
                text-4xl
                font-bold
                leading-tight
                tracking-tight
              "
            >
              Accelerate your team's intelligence.
            </h2>

            {/* Description */}

            <p
              className="
                max-w-sm
                text-base
                leading-6
                text-[#cbc4d2]
              "
            >
              Connect your enterprise data to our specialized AI models
              and unlock unparalleled strategic insights in seconds.
            </p>

            {/* Stats */}

            <div className="flex gap-12 pt-6">

              <div>
                <p className="text-2xl font-bold">
                  99.9%
                </p>

                <p className="text-xs text-[#948e9c]">
                  Uptime SLA
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  ISO
                </p>

                <p className="text-xs text-[#948e9c]">
                  27001 Certified
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ================= RIGHT PANEL ================= */}

        <section
          className="
            flex min-h-screen w-full
            items-center justify-center
            bg-[#141218]
            px-6 py-24
            md:w-[60%]
            md:px-12
          "
        >

          <div className="w-full max-w-[492px]">

            {/* Heading */}

            <div className="mb-8 space-y-2">

              <h2
                className="
                  text-3xl
                  font-bold
                  tracking-tight
                  md:text-[32px]
                "
              >
                Create your account
              </h2>

              <p className="text-sm text-[#cbc4d2]">
                Experience the future of collaborative data intelligence.
              </p>

            </div>

            {/* ================= FORM ================= */}

            <form
              onSubmit={handleSubmit(onRegisterSubmit)}
              className="space-y-6"
            >

              {/* ================= NAME ================= */}

              <div>

                <label
                  htmlFor="name"
                  className="
                    mb-2
                    block
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-wider
                    text-[#cbc4d2]
                  "
                >
                  Full Name
                </label>

                <div className="relative">

                  <span
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-[#6f6878]
                    "
                  >
                    👤
                  </span>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    {...register("name", {
                      required: "Full name is required",
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                      },
                    })}
                    className="
                      w-full
                      rounded-lg
                      border
                      border-[#494551]
                      bg-[#1d1b20]
                      py-4
                      pl-12
                      pr-4
                      text-sm
                      text-[#e6e0e9]
                      outline-none
                      transition
                      placeholder:text-[#625d68]

                      focus:border-[#cfbcff]
                      focus:ring-2
                      focus:ring-[#cfbcff]/20
                    "
                  />

                </div>

                {errors.name && (
                  <p className="mt-1 text-xs text-[#ffb4ab]">
                    {errors.name.message}
                  </p>
                )}

              </div>

              {/* ================= EMAIL ================= */}

              <div>

                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-wider
                    text-[#cbc4d2]
                  "
                >
                  Email Address
                </label>

                <div className="relative">

                  <span
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-[#6f6878]
                    "
                  >
                    ✉
                  </span>

                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Enter a valid email address",
                      },
                    })}
                    className="
                      w-full
                      rounded-lg
                      border
                      border-[#494551]
                      bg-[#1d1b20]
                      py-4
                      pl-12
                      pr-4
                      text-sm
                      text-[#e6e0e9]
                      outline-none
                      transition
                      placeholder:text-[#625d68]

                      focus:border-[#cfbcff]
                      focus:ring-2
                      focus:ring-[#cfbcff]/20
                    "
                  />

                </div>

                {errors.email && (
                  <p className="mt-1 text-xs text-[#ffb4ab]">
                    {errors.email.message}
                  </p>
                )}

              </div>

              {/* ================= PASSWORD ================= */}

              <div>

                <label
                  htmlFor="password"
                  className="
                    mb-2
                    block
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-wider
                    text-[#cbc4d2]
                  "
                >
                  Password
                </label>

                <div className="relative">

                  <span
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-[#6f6878]
                    "
                  >
                    🔒
                  </span>

                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message:
                          "Password must contain at least 8 characters",
                      },
                    })}
                    className="
                      w-full
                      rounded-lg
                      border
                      border-[#494551]
                      bg-[#1d1b20]
                      py-4
                      pl-12
                      pr-4
                      text-sm
                      text-[#e6e0e9]
                      outline-none
                      transition
                      placeholder:text-[#625d68]

                      focus:border-[#cfbcff]
                      focus:ring-2
                      focus:ring-[#cfbcff]/20
                    "
                  />

                </div>

                {/* Password Strength */}

                {password && (
                  <div className="mt-2">

                    <div className="flex gap-1">

                      {[1, 2, 3, 4].map((level) => (
                        <div
                          key={level}
                          className={`
                            h-1 flex-1 rounded-full
                            ${
                              level <= strength.score
                                ? "bg-[#cfbcff]"
                                : "bg-[#494551]/40"
                            }
                          `}
                        />
                      ))}

                    </div>

                    <p className="mt-1 text-xs text-[#cfbcff]">
                      {strength.text}
                    </p>

                  </div>
                )}

                {errors.password && (
                  <p className="mt-1 text-xs text-[#ffb4ab]">
                    {errors.password.message}
                  </p>
                )}

              </div>

              {/* ================= TERMS ================= */}

              <div className="flex items-start gap-3">

                <input
                  id="terms"
                  type="checkbox"
                  {...register("terms", {
                    required:
                      "You must accept the Terms and Privacy Policy",
                  })}
                  className="
                    mt-1
                    h-5
                    w-5
                    shrink-0
                    cursor-pointer
                    rounded
                    border-[#494551]
                    bg-[#1d1b20]
                    text-[#cfbcff]

                    focus:ring-[#cfbcff]
                    focus:ring-offset-0
                  "
                />

                <label
                  htmlFor="terms"
                  className="
                    text-xs
                    leading-5
                    text-[#cbc4d2]
                  "
                >
                  I agree to the{" "}

                  <a
                    href="#"
                    className="
                      text-[#cfbcff]
                      hover:underline
                    "
                  >
                    Terms of Service
                  </a>

                  {" "}and{" "}

                  <a
                    href="#"
                    className="
                      text-[#cfbcff]
                      hover:underline
                    "
                  >
                    Privacy Policy
                  </a>
                  .
                </label>

              </div>

              {errors.terms && (
                <p className="-mt-4 text-xs text-[#ffb4ab]">
                  {errors.terms.message}
                </p>
              )}

              {/* ================= CREATE ACCOUNT ================= */}

              <button
                type="submit"
                className="
                  w-full
                  rounded-lg
                  bg-gradient-to-r
                  from-[#6750a4]
                  to-[#cfbcff]
                  py-4
                  text-base
                  font-bold
                  text-[#22005d]
                  shadow-lg
                  shadow-[#6750a4]/20
                  transition

                  hover:opacity-90
                  active:scale-[0.99]
                "
              >
                Create Account
              </button>

              {/* ================= DIVIDER ================= */}

              <div className="flex items-center gap-4 py-2">

                <div className="h-px flex-1 bg-[#494551]/40" />

                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    text-[#625d68]
                  "
                >
                  Or continue with
                </span>

                <div className="h-px flex-1 bg-[#494551]/40" />

              </div>

              {/* ================= SOCIAL BUTTONS ================= */}

              <div className="grid grid-cols-2 gap-4">

                <button
                  type="button"
                  className="
                    flex
                    h-14
                    items-center
                    justify-center
                    gap-3
                    rounded-lg
                    border
                    border-[#494551]
                    bg-transparent
                    text-sm
                    font-medium
                    transition

                    hover:bg-[#211f24]
                  "
                >
                  <span className="text-lg">
                    ◉
                  </span>

                  Google
                </button>

                <button
                  type="button"
                  className="
                    flex
                    h-14
                    items-center
                    justify-center
                    gap-3
                    rounded-lg
                    border
                    border-[#494551]
                    bg-transparent
                    text-sm
                    font-medium
                    transition

                    hover:bg-[#211f24]
                  "
                >
                  <span className="text-lg">
                    ✣
                  </span>

                  SSO
                </button>

              </div>

              {/* ================= LOGIN ================= */}

              <p className="pt-6 text-center text-sm text-[#cbc4d2]">

                Already have an account?{" "}

                <a
                  href="#"
                 onClick={()=>nav('/')}
                  className="
                    font-semibold
                    text-[#cfbcff]
                    hover:underline
                  "
                >
                  Log In
                </a>

              </p>

            </form>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer
        className="
          border-t
          border-[#494551]/20
          bg-[#141218]
          px-6
          py-8
          md:px-12
        "
      >

        <div
          className="
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <h2 className="text-lg font-bold">
            Synthetix AI
          </h2>

          <div className="flex flex-wrap gap-6 text-xs text-[#cbc4d2]">

            <a href="#" className="hover:text-[#cfbcff]">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-[#cfbcff]">
              Terms of Service
            </a>

            <a href="#" className="hover:text-[#cfbcff]">
              Security
            </a>

            <a href="#" className="hover:text-[#cfbcff]">
              System Status
            </a>

          </div>

          <p className="text-xs text-[#948e9c]">
            © 2024 Synthetix AI. Enterprise Intelligence Platforms.
          </p>

        </div>

      </footer>

    </div>
  );
};

export default Register;