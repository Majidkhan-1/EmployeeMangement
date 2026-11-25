import React from "react";

import { useAuth } from "../../hook/useAuth";

const Login = () => {

let {register,handleSubmit,onLoginSubmit,errors,nav} = useAuth();


  return (
    <div className="min-h-screen overflow-hidden bg-[#141218] font-['Inter'] text-[#e6e0e9]">

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none fixed inset-0 z-0">

        <div
          className="
            absolute
            -right-32
            -top-32
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#cfbcff]/5
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            -bottom-32
            -left-32
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#cdc0e9]/5
            blur-[100px]
          "
        />

      </div>

      {/* ================= MAIN ================= */}

      <main
        className="
          relative
          z-10
          flex
          min-h-screen
          flex-grow
          items-center
          justify-center
          px-4
          py-10
        "
      >

        <div className="w-full max-w-[440px]">

          {/* ================= CARD ================= */}

          <div
            className="
              overflow-hidden
              rounded-xl
              border
              border-[#494551]/30
              bg-[#1d1b20]
              p-6
              shadow-2xl
              sm:p-8
            "
          >

            {/* ================= BRAND HEADER ================= */}

            <div className="mb-8 text-center">

              {/* Logo */}

              <div
                className="
                  mx-auto
                  mb-4
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#6750a4]
                "
              >
                <span className="text-2xl text-[#cfbcff]">
                  ◈
                </span>
              </div>

              <h1
                className="
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-[#e6e0e9]
                "
              >
                Synthetix AI
              </h1>

              <p className="mt-1 text-sm text-[#cbc4d2]">
                Sign in to your workspace
              </p>

            </div>

            {/* ================= SOCIAL LOGIN ================= */}

            <div className="mb-8 grid grid-cols-2 gap-4">

              <button
                type="button"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-[#494551]/50
                  bg-[#2b292f]
                  px-4
                  py-2.5
                  transition-colors
                  hover:bg-[#3b383e]
                "
              >

                <span className="text-base text-[#cbc4d2] transition group-hover:text-[#e6e0e9]">
                  ◉
                </span>

                <span
                  className="
                    text-[11px]
                    font-semibold
                    tracking-wider
                    text-[#e6e0e9]
                  "
                >
                  GOOGLE
                </span>

              </button>

              <button
                type="button"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-[#494551]/50
                  bg-[#2b292f]
                  px-4
                  py-2.5
                  transition-colors
                  hover:bg-[#3b383e]
                "
              >

                <span className="text-base text-[#cbc4d2] transition group-hover:text-[#e6e0e9]">
                  ◇
                </span>

                <span
                  className="
                    text-[11px]
                    font-semibold
                    tracking-wider
                    text-[#e6e0e9]
                  "
                >
                  GITHUB
                </span>

              </button>

            </div>

            {/* ================= DIVIDER ================= */}

            <div className="mb-8 flex items-center">

              <div className="h-px flex-1 bg-[#494551]/30" />

              <span
                className="
                  px-3
                  text-xs
                  text-[#cbc4d2]
                "
              >
                or continue with email
              </span>

              <div className="h-px flex-1 bg-[#494551]/30" />

            </div>

            {/* ================= FORM ================= */}

            <form
              onSubmit={handleSubmit(onLoginSubmit)}
              className="space-y-6"
            >

              {/* ================= EMAIL ================= */}

              <div className="space-y-2">

                <label
                  htmlFor="email"
                  className="
                    ml-1
                    block
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-wider
                    text-[#cbc4d2]
                  "
                >
                  {/* Email Address */}
                  User Name
                </label>

                <input
                  id="name"
                  type="text"
                  // placeholder="name@company.com"
                  placeholder="user_name"
                  {...register("username", {
                    required: "Name address is required",
                    // pattern: {
                    //   value:
                    //     /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    //   message: "Enter a valid email address",
                    // },
                  })}
                  className="
                    w-full
                    rounded-lg
                    border
                    border-[#494551]/50
                    bg-[#0f0d13]
                    px-4
                    py-3
                    text-sm
                    text-[#e6e0e9]
                    outline-none
                    transition-all
                    placeholder:text-[#948e9c]/50

                    focus:border-[#cfbcff]
                    focus:ring-2
                    focus:ring-[#cfbcff]/30
                  "
                />

                {errors.email && (
                  <p className="ml-1 text-xs text-[#ffb4ab]">
                    {errors.email.message}
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

              <div className="space-y-2">

                {/* Label + Forgot Password */}

                <div className="flex items-center justify-between px-1">

                  <label
                    htmlFor="password"
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-wider
                      text-[#cbc4d2]
                    "
                  >
                    Password
                  </label>

                  <a
                    href="#"
                    className="
                      text-xs
                      text-[#cfbcff]
                      transition
                      hover:underline
                    "
                  >
                    Forgot password?
                  </a>

                </div>

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
                    border-[#494551]/50
                    bg-[#0f0d13]
                    px-4
                    py-3
                    text-sm
                    text-[#e6e0e9]
                    outline-none
                    transition-all
                    placeholder:text-[#948e9c]/50

                    focus:border-[#cfbcff]
                    focus:ring-2
                    focus:ring-[#cfbcff]/30
                  "
                />

                {errors.password && (
                  <p className="ml-1 text-xs text-[#ffb4ab]">
                    {errors.password.message}
                  </p>
                )}

              </div>

              {/* ================= REMEMBER ME ================= */}

              <div className="flex items-center gap-2 px-1">

                <input
                  id="remember"
                  type="checkbox"
                  {...register("remember")}
                  className="
                    h-4
                    w-4
                    cursor-pointer
                    rounded
                    border-[#494551]
                    bg-[#0f0d13]
                    text-[#cfbcff]

                    focus:ring-2
                    focus:ring-[#cfbcff]/30
                  "
                />

                <label
                  htmlFor="remember"
                  className="
                    cursor-pointer
                    select-none
                    text-xs
                    text-[#cbc4d2]
                  "
                >
                  Stay signed in
                </label>

              </div>

              {/* ================= SIGN IN BUTTON ================= */}

              <button
                type="submit"
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-[#6750a4]
                  px-4
                  py-3.5
                  text-sm
                  font-semibold
                  text-[#e0d2ff]
                  shadow-lg
                  transition-all
                  duration-300

                  hover:bg-[#cfbcff]
                  hover:text-[#381e72]
                  hover:shadow-[#cfbcff]/20

                  active:scale-[0.98]
                "
              >

                <span>
                  Sign In
                </span>

                <span className="text-lg">
                  →
                </span>

              </button>

            </form>

            {/* ================= SIGN UP ================= */}

            <div
              className="
                mt-8
                border-t
                border-[#494551]/30
                pt-6
                text-center
              "
            >

              <p className="text-xs text-[#cbc4d2]">

                Don't have an account?

                <button
                  href="#"
                  onClick={()=>nav('/register')}
                  className="
                    ml-1
                    font-bold
                    text-[#cfbcff]
                    hover:underline
                    
                  "
                >
                  Sign Up
                </button>

              </p>

            </div>

          </div>

          {/* ================= FOOTER ================= */}

          <div className="mt-6 text-center">

            <p className="text-xs text-[#948e9c]/50">
              © 2024 Synthetix AI. Enterprise Intelligence Platforms.
            </p>

            <div className="mt-2 flex justify-center gap-4">

              <a
                href="#"
                className="
                  text-xs
                  text-[#948e9c]/40
                  transition
                  hover:text-[#cbc4d2]
                "
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="
                  text-xs
                  text-[#948e9c]/40
                  transition
                  hover:text-[#cbc4d2]
                "
              >
                Terms of Service
              </a>

            </div>

          </div>

        </div>

      </main>

      {/* ================= DECORATION ================= */}

      <div
        className="
          pointer-events-none
          fixed
          bottom-6
          right-6
          hidden
          h-64
          w-64
          overflow-hidden
          rounded-xl
          border
          border-[#494551]/20
          opacity-20
          lg:block
        "
      >

        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjMNAC4ppTVn0YPcws7fR8cZoQ0dwlcJzCHSV2igftfRdCty6Xzwi_PvJWJUQiXO8gyA4Za08K6TKFIlPbFGSEIfALTx5yS7m2Loweu3Chxa7qKfJS6kF_cwtpvauw2TcTN5kGAR8YGKUUiQoGQlDen_9MfQv3U_Hjhe8Uasps5cbAYAfuQ0vFuo_HaGsihet7JFy_qk2DKMhLdLZt1c3k4-pJz9ydAXGWkq0Jq8YHaWg6fKfWCKGB1rNI8ExadFltELKG_QsO-4ex"
          alt="Abstract AI visualization"
          className="h-full w-full object-cover"
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#141218]
            to-transparent
          "
        />

      </div>

    </div>
  );
};

export default Login;