import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import base64 from "base-64";

const Notices = () => {
    const { index } = useParams();

    const [notice, setNotice] = useState([]);

    useEffect(() => {
        fetchNoticeByIndex();
    }, []);

    const fetchNoticeByIndex = async () => {
        try {
            // 서버에서 데이터 가져오기
            const response = await fetch(
                `https://port-0-spring-eu1k2llldpju8v.sel3.cloudtype.app/notice/${index}`
            );
            const data = await response.json();

            setNotice(data);

            const jwtToken = localStorage.getItem("token");
            const payload = jwtToken.split(".")[1];
            const dec = JSON.parse(base64.decode(payload));

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <Container maxWidth="lg">
            <Card style = {{backgroundColor: "#f5f5f5"}}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {notice.title}
                    </Typography>
                </CardContent>

                <CardContent>
                    <Typography>{notice.content}</Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Notices;
