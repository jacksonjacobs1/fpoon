import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./gltf";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ModelViewer = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
    const containerStyle = {
        position: "absolute",
    };

    const cardStyle = {
        top: 20,
        position: "relative",
        backgroundColor: "#509",
        color: "white",
        borderColor: "white",
        padding: "0.1in"
    }



    return (
        <div>
            <Container style={containerStyle}>
                <Row>
                    <Col>
                        <Card style={cardStyle}>
                            <Card.Body style={{position: "relative"}}>
                                <Card.Title>The Fpoon</Card.Title>
                                <Card.Text>
                                    Welcome to the next generation of cutlery.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs lg="2">

                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <Canvas style={{ height: '100%', position: "absolute", zIndex: -1 }} camera={{ position: [0, 0, 50] }} >
                <color attach="background" args={['#509']} />
                <ambientLight intensity={0.8} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Suspense fallback={null}>
                    <GltfModel modelPath={modelPath} scale={scale} position={[0, 0, 0]} />
                    <OrbitControls />
                </Suspense>
            </Canvas>
        </div>

    );
};

export default ModelViewer;