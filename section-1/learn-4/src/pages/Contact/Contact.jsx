import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        alert('Message sent to /dev/null (just kidding!)')
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#00ff41] mb-4 terminal-text-shadow">
                        &gt; Contact_Us
                    </h1>
                    <p className="text-xl text-[#008f11]">
                        // Establish connection...
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-[#0d1117] p-8 border border-[#30363d] shadow-[0_0_15px_rgba(0,255,65,0.1)]">
                        <h2 className="text-2xl font-bold text-[#00ff41] mb-6 border-b border-[#30363d] pb-2">
                            &gt; Send_Message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-[#008f11] mb-2 font-mono">
                                    var name =
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] text-[#00ff41] focus:border-[#00ff41] focus:outline-none transition-all duration-300 font-mono"
                                    placeholder='"Your Name"'
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[#008f11] mb-2 font-mono">
                                    var email =
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] text-[#00ff41] focus:border-[#00ff41] focus:outline-none transition-all duration-300 font-mono"
                                    placeholder='"email@example.com"'
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[#008f11] mb-2 font-mono">
                                    var message =
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 bg-[#0d1117] border border-[#30363d] text-[#00ff41] focus:border-[#00ff41] focus:outline-none transition-all duration-300 resize-vertical font-mono"
                                    placeholder='"Enter your message..."'
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#00ff41] text-[#0d1117] hover:bg-[#008f11] py-4 px-6 font-bold text-lg transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.3)]"
                            >
                                ./send.sh
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-[#0d1117] p-6 border border-[#30363d]">
                            <h3 className="text-xl font-bold text-[#00ff41] mb-4 border-b border-[#30363d] pb-2">
                                &gt; Contact_Info
                            </h3>
                            <div className="space-y-4 font-mono">
                                <div className="flex items-start">
                                    <span className="text-[#00ff41] text-xl mr-3">@</span>
                                    <div>
                                        <p className="font-bold text-[#00ff41]">Email</p>
                                        <p className="text-[#008f11]">hitesh@teaandcode.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#00ff41] text-xl mr-3">#</span>
                                    <div>
                                        <p className="font-bold text-[#00ff41]">Website</p>
                                        <p className="text-[#008f11]">teaandcode.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-[#00ff41] text-xl mr-3">/</span>
                                    <div>
                                        <p className="font-bold text-[#00ff41]">GitHub</p>
                                        <p className="text-[#008f11]">github.com/hiteshchoudhary</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#0d1117] p-6 border border-[#30363d]">
                            <h3 className="text-xl font-bold text-[#00ff41] mb-4 border-b border-[#30363d] pb-2">
                                &gt; Response_Time
                            </h3>
                            <p className="text-[#008f11] mb-4 font-mono">
                                // We typically respond to all messages within 24 hours.
                            </p>
                            <p className="text-[#008f11] font-mono">
                                // For urgent matters, please mention "URGENT" in your subject line.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
