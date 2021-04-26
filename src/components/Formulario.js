import React, {Fragment, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ Button, Container, Row, Form,Label, InputGroup,  FormControl,Col} from'react-bootstrap';

import '../App.css';

export default function Formulario(){
    return(
        <>
        <div>
            <Container>
                <Row>

                    <Col sm={2}></Col>
                    <Col sm={8}>
                
                        <InputGroup className="mb-3">
                    
                    
                            <FormControl
                                size="md"
                                type= "text"
                                placeholder="Busca por producto o categoria, ejemplo: accesorios, cocina,  belleza, etc"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            
                            <Button  size="md" className="btn btn-primary"><i class="fas fa-search"></i></Button>
                                
                        </InputGroup>
                    </Col >
                    <Col  sm={2}></Col>
                </Row>
            </Container>
        </div>
        </>
    )
};