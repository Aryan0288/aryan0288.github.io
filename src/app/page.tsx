import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-gray-900">Stripe</div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Products</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Solutions</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Developers</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">Sign in</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Start now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Financial infrastructure to
            <span className="text-blue-600"> grow your revenue</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the millions of companies that use Stripe to accept payments online and in person,
            embed financial services, power custom revenue models, and build a more profitable business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700">
              Request an invite
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50">
              Contact sales
            </button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Net volume</h3>
                <div className="text-3xl font-bold text-green-600">₹35,28,198.72</div>
                <div className="text-sm text-gray-500">Today 14:00</div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">INR Balance</h3>
                <div className="text-3xl font-bold text-blue-600">₹5,53,257.51</div>
                <div className="text-sm text-gray-500">Available to pay out</div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Payouts</h3>
                <div className="text-3xl font-bold text-purple-600">₹1,02,633.07</div>
                <div className="text-sm text-gray-500">Expected today</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              A fully integrated suite of financial and payments products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reduce costs, grow revenue, and run your business more efficiently on a fully integrated,
              AI-powered platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Payments', desc: 'Accept payments online and in person', color: 'blue' },
              { name: 'Billing', desc: 'Subscriptions and usage-based billing', color: 'green' },
              { name: 'Checkout', desc: 'Pre-built payment form', color: 'purple' },
              { name: 'Terminal', desc: 'In-person payments', color: 'orange' },
              { name: 'Connect', desc: 'Payments for platforms', color: 'red' },
              { name: 'Radar', desc: 'Fraud prevention', color: 'indigo' },
              { name: 'Tax', desc: 'Sales tax & VAT automation', color: 'pink' },
              { name: 'Sigma', desc: 'Custom reports', color: 'yellow' }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 bg-${product.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <div className={`w-6 h-6 bg-${product.color}-600 rounded`}></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Growth Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Take your start-up further, faster
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Startups build on Stripe to launch faster, adapt as they grow, and automate workflows
              to do more with less.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Incorporate your company</h3>
              <p className="text-gray-600 mb-6">
                Form a legal entity, issue stock, and start accepting payments.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Learn about Atlas →
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sell products and services</h3>
              <p className="text-gray-600 mb-6">
                Launch a business with a prebuilt payment page that's optimised for conversion.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Start with Checkout →
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-purple-600 rounded"></div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Validate your idea</h3>
              <p className="text-gray-600 mb-6">
                Test your product idea by launching payments with little to no code.
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Try Payment Links →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Create an account instantly to get started or contact us to design a custom package for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100">
              Start now
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700">
              Contact sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Stripe</div>
              <p className="text-gray-400">
                Financial infrastructure to grow your revenue.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Payments</a></li>
                <li><a href="#" className="hover:text-white">Billing</a></li>
                <li><a href="#" className="hover:text-white">Checkout</a></li>
                <li><a href="#" className="hover:text-white">Terminal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Startups</a></li>
                <li><a href="#" className="hover:text-white">Enterprises</a></li>
                <li><a href="#" className="hover:text-white">E-commerce</a></li>
                <li><a href="#" className="hover:text-white">SaaS</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Developers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">API Reference</a></li>
                <li><a href="#" className="hover:text-white">Libraries</a></li>
                <li><a href="#" className="hover:text-white">Tools</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Stripe, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
