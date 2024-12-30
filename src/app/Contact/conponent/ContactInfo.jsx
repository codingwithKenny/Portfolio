import { useEffect } from 'react';
import useHandleMailme from "@/app/hook/useHandleMessage.js";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfo = () => {
    const { onSubmit, form, handleChange } = useHandleMailme();

    return (
        <div className='cardstack '>
            {/* Contact Info Section */}
            <div className='lg:flex item-center justify-around bg-black bg-opacity-50 text-gray-200 p-10 lg:p-20'>
            <div className='mb-8'>
                <p className='text-white text-2xl lg:text-3xl mb-3'>Contact Info</p>
                <div className='flex items-center mb-4'>
                    <FontAwesomeIcon icon={faPhone} className='mr-3 text-2xl lg:text-3xl' />
                    <p className='text-white text-lg'>Phone:<br />+2348106114218</p>
                </div>
                <div className='flex items-center'>
                    <FontAwesomeIcon icon={faEnvelope} className='mr-3 text-2xl lg:text-3xl' />
                    <p className='text-white text-lg'>Email:<br /><span>okunlolaridwanat@gmail.com</span></p>
                </div>
            </div>

            {/* Message Me Section */}
            <div>
                <p className='text-white text-2xl lg:text-3xl mb-5'>Message Me</p>
                <Form {...form}>
                    <Input className="w-full lg:w-96 border-white mb-3 text-white" placeholder="Full Name" {...form.register('name')} onChange={handleChange} />
                    <Input className="w-full lg:w-96 border-white mb-3 text-white" placeholder="Email" {...form.register('email')} onChange={handleChange} />
                    <Input className="w-full lg:w-96 border-white mb-5 text-white" placeholder="Message" {...form.register('message')} onChange={handleChange} />
                    <Button className="w-full lg:w-96 bg-white text-black" onClick={onSubmit}>Send</Button>
                </Form>
            </div>
            </div>
        </div>
    );
}

export default ContactInfo;
