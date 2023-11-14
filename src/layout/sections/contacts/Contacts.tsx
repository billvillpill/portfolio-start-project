import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from './Contacts_Styles';
import emailjs from '@emailjs/browser';

export const Contacts: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return

        emailjs.sendForm('service_euvln2h', 'template_wcvd5x3', form.current, 'XywDyYXXucsQDn8EH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };


    return (
        <S.Contacts id={"contact"} >
            <Container>
                {/*звголовок h2*/}
                <SectionTitle>Contact</SectionTitle>
                {/*форма*/}
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={"name"} name={"user_name"}/>
                    <S.Field required placeholder={"email"} name={"email"}/>
                    <S.Field required placeholder={"subject"} name={"subject"}/>
                    <S.Field required placeholder={"message"} as={"textarea"} name={"message"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};
