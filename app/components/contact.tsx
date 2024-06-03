'use client';
import {Button} from "flowbite-react";
import {useState} from "react";
import type {FC, FormEvent, ChangeEvent} from "react";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm: FC = function () {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [state, setState] = useState<'idle' | 'loading' | 'done'>('idle');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const clearForm = () => {
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setState('loading');
        try {
            const url = process.env.NEXT_PUBLIC_FORM_SUBMISSION_URL!;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            await response.json();
            setState('done');
        } catch (error) {
            setState('idle');
            console.error('Error:', error);
        } finally {
            // clearForm();
            setTimeout(() => setState('idle'), 1000);
        }
    };

    let buttonTextByState;
    if (state === 'idle') {
        buttonTextByState = "Send message"
    }
    if (state === 'loading') {
        buttonTextByState = "..."
    }
    if (state === 'done') {
        buttonTextByState = "Message sent!"
    }

    return (
        <section id="contact" className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact
                    Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a
                    technical issue? Want to send feedback about a beta feature? Need details about our Premium plan?
                    Let us know.</p>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Ada Lovelace"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@flowbite.com" required
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="subject"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Let us know how we can help you"
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                            Your message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            placeholder="Leave a comment..."
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                    </div>
                    <Button color="blue" size="lg" type="submit">
                        {buttonTextByState}
                    </Button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
