import { useRef, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function HCaptchaForm() {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const captchaRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        // Get form data
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
            token: token
        };

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setMessage('Form submitted successfully!');
                e.target.reset();
                setToken(null);
                captchaRef.current?.resetCaptcha();
            } else {
                setMessage(result.error || 'Submission failed');
            }
        } catch (error) {
            setMessage('Network error occurred');
        }

        setLoading(false);
    };

    const onVerify = (token) => {
        setToken(token);
    };

    const onError = (err) => {
        console.error('hCaptcha Error:', err);
        setMessage('Captcha verification failed');
    };

    const onExpire = () => {
        setToken(null);
        setMessage('Captcha expired, please try again');
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                </div>

                <HCaptcha
                    ref={captchaRef}
                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
                    size="invisible"
                    onVerify={onVerify}
                    onError={onError}
                    onExpire={onExpire}
                />

                <button
                    type="submit"
                    disabled={!token || loading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>

            {message && (
                <div className={`mt-4 p-3 rounded-md ${
                    message.includes('successfully') 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                }`}>
                    {message}
                </div>
            )}
        </div>
    );
}