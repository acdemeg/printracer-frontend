import React from "react";
import { MockServiceConsumer } from "../mock-service-context";

const withMockService = () => (Wrapped) => {
    return (props) => (
        <MockServiceConsumer>
            {
                (mockService) => {
                    return <Wrapped {...props}
                        mockService={mockService}/>
                }
            }
        </MockServiceConsumer>
    );
}

export default withMockService;