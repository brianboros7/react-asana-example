import React from 'react'
import './style.css'
import { Container, Row, Col } from 'react-bootstrap'
// import TaskItem from '../../components/tasks/TaskCompleted' 
import AppHeader from '../../components/header/AppHeader'
import HubSection from '../../components/hub-section/HubSection'

function Dashboard() {

    return(
        <section>
            <AppHeader /> 

            <Container>
                <Row> 
                    <Col className="DashboardHomeCol">
                       <HubSection /> 
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Dashboard 