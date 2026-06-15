import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-sage-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-sage-500 flex items-center justify-center">
                <span className="text-white text-xs font-semibold">SR</span>
              </div>
              <span className="font-semibold text-white text-sm">
                SureScreen Recruit
              </span>
            </div>
            <p className="text-xs leading-relaxed text-sage-500">
              AI-powered candidate screening for modern hiring teams.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3">
              Product
            </p>
            <ul className="space-y-2 text-sm">
              {["How it works", "Pricing", "Talent pool", "For candidates"].map(
                (l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3">
              Company
            </p>
            <ul className="space-y-2 text-sm">
              {["About", "Blog", "Careers", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3">
              Legal
            </p>
            <ul className="space-y-2 text-sm">
              {["Privacy policy", "Terms of use", "Cookie policy"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-sage-800 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs text-sage-600">
            © {new Date().getFullYear()} SureScreen Recruit Pty Ltd. ABN
            pending registration. Melbourne, Australia.
          </p>
          <p className="text-xs text-sage-600">
            Built on{" "}
            <a
              href="https://surescreen.com.au"
              className="hover:text-sage-400 transition-colors"
            >
              surescreen.com.au
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
