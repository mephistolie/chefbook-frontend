import React from 'react';
import {Col, Container} from "react-bootstrap";

const ProfileDeletion = () => {
    return (<Container>
        <Col style={{marginTop: "64px", marginBottom: "96px"}}>
            <p className="header1">Profile Deletion</p>
            <p>ChefBook stores personal data only you entered:</p>
            <p>
                <ul>
                    <li>Email</li>
                    <li>Password</li>
                    <li>Linked OAuth profiles IDs</li>
                    <li>Additional info for profile (name, nickname description, etc)</li>
                </ul>
            </p>
            <p>You can check our <a href="https://github.com/mephistolie/chefbook-backend">backend repository</a>.</p>
            <p>Versions before 4.0 also use integrated Google Ads and Crashlytics.</p>
            <p>You can delete partial or entire personal data</p>
            <p><strong>VERSION 4.0+</strong></p>
            <p>
                <ol>
                    <li>Open ChefBook App</li>
                    <li>Click profile button at top of display</li>
                    <li>Open <b>Profile Editing</b> section</li>
                    <li>Erase unwanted data. It'll be deleted immediately</li>
                    <li>If you want remove account entirely, click corresponding button on screen and confirm request.
                        It'll be processed in 2 weeks. You can optionally save your public recipes for community.
                    </li>
                </ol>
            </p>
            <p><strong>OLD VERSIONS / ALTERNATIVE METHOD</strong></p>
            <p>Old app versions use Firebase as database. They haven't integrated profile deletion functionality.</p>
            <p>You can request profile deletion in manual mode by writing
                mail to support@chefbook.io or using any other contact method</p>
        </Col>
    </Container>);
};

export default ProfileDeletion;
