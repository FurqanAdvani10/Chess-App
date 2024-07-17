import React from 'react'
import './save.css'
import { Button, Form, InputGroup } from 'react-bootstrap'

function SignUp() {




  return (
   
    <div className='save-main section-padding' id='save'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 col-sm-12 col-lg-12'>
                        <div className='save-content'>
                            <div className='save-heading'>
                                <h2 className='p-0 m-0'>
                               SIGN UP AND SAVE
                                </h2>
                                <p className='p-0 m-0'>
                                Enter your email to get special offers, giveaways and deals.
                                </p>
                            </div>
                            <div className='save-ipt'>
                            <InputGroup className=" d-flex">
                                            <Form.Control
                                                placeholder="Email address"
                                                aria-label="Recipient's username"
                                                aria-describedby="basic-addon2"
                                                className='sub-footer-input'
                                                // name='mail'
                                                // value={values.mail}
                                                // value={values.emailfooter}
                                            />
                                            <Button
                                                variant="outline-secondary"
                                                id="button-addon2 "
                                                className='input-button'>
                                                    Subscribe
                                                </Button>
                                        </InputGroup>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp