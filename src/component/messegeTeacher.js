import React from 'react'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import Footer from './footer'
import Navber from './navber'
import MessageT from './messegeT'




function MessegesTeacher() {
    let inputRef = useRef();
    const params = useParams();
    let ar = [];
    let email = params.email;
    let [messege, setmessege] = useState([]);

    const nav_list = [
        {
            name: 'back',
            link: '../'
        },]


    useEffect(() => {

        getApi();

    }, [])

    const getApi = async () => {

        let url = "http://localhost:3001/user/messege/" + email;
        try {
            let resp = await axios({
                url,
                method: "get",

            })

            setmessege(resp.data);
        }


        catch (err) {
            console.log(err)
            alert("failed")
        }


    }

    const sendText = async (_body) => {
        ar = [];
        if (messege.length < 6) {
            for (let i = 0; i < messege.length; i++) {
                ar.push(messege[i]);
            }
        }
        else {
            ar.push(messege[messege.length - 1])
        }
        let combine = {
            email: "cymatlin@gmail.com",
            msg: _body
        }
        ar.push(combine);

        let url = "http://localhost:3001/user/Edit/" + email;
        try {
            let resp = await axios({
                url,
                method: "put",
                data: {
                    Messeges: ar
                }

            })
            window.location.reload(false);
        }

        catch (err) {
            console.log(err)
            alert("failed")
        }

    }

    return (
        <section >
            <Navber nav_list={nav_list} />
            <div class="container py-5">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-4">
                        <div class=" shadow-lg" id="chat1" style={{ borderRadius: '15px' }}>
                            <div
                                class="card-header d-flex justify-content-between align-items-center p-3  text-white border-bottom-0"
                                style={{ borderTopLeftRadius: ' 15px', borderTopRightRadius: ' 15px', backgroundColor: '#6bfbfb' }}>
                                <i class="fas fa-angle-left"></i>
                                <p class="mb-0 fw-bold">chat</p>
                                <i class="fas fa-times"></i>
                            </div>

                            <div class="card-body mt-4">
                                <MessageT messege={messege} />

                                <div class="form-outline d-flex m-3">
                                    <textarea ref={inputRef} class="form-control  mb-3" id="textAreaExample" rows="2"></textarea>
                                    <button onClick={() => {
                                        sendText(inputRef.current.value);
                                    }} class="btn border ms-1 p-1  mb-3" style={{ backgroundColor: '#6bfbfb' }} >Type your message</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </section>
    )
}


export default MessegesTeacher