import React from 'react'

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>

                <div className="bg-white rounded-lg shadow-md p-8">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Other Ways to Reach Us</h2>
                        <div className="space-y-2 text-gray-600">
                            <p>📧 Email: hello@teaandcode.com</p>
                            <p>🐦 Twitter: @teaandcode</p>
                            <p>💼 LinkedIn: Tea & Code</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
