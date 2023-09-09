import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const Alerts = () => {
    const [notices, setNotices] = useState([]);
    const [searchOption, setSearchOption] = useState("title");
    const [searchKeyword, setSearchKeyword] = useState("");

    useEffect(() => {
        fetchNotices();
    }, []);

    const fetchNotices = async () => {
        try {
            const response = await fetch(
                "https://port-0-spring-eu1k2llldpju8v.sel3.cloudtype.app/notice/all"
            );
            const data = await response.json();
            setNotices(data);
        } catch (error) {
            console.error("데이터를 가져오는 중 오류 발생:", error);
        }
    };

    const handleSearch = async () => {
        if (searchOption === "title") {
            try {
                const response = await fetch(
                    `https://port-0-spring-eu1k2llldpju8v.sel3.cloudtype.app/notice/title/${searchKeyword}`
                );
                const data = await response.json();
                setNotices(data);
            } catch (error) {
                console.error("Error searching by title:", error);
            }
        } else if (searchOption === "author") {
            try {
                const response = await fetch(
                    `https://port-0-spring-eu1k2llldpju8v.sel3.cloudtype.app/notice/writer/${searchKeyword}`
                );
                const data = await response.json();
                setNotices(data);
            } catch (error) {
                console.error("Error searching by author:", error);
            }
        }
    };

    const handleSearchOptionChange = (e) => {
        setSearchOption(e.target.value);
    };

    return (
        <div>
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        공지사항
                    </Typography>
                </CardContent>

                <CardContent>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>번호</TableCell>
                                <TableCell>제목</TableCell>
                                <TableCell>작성자</TableCell>
                                <TableCell>날짜</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {notices.map((notice) => (
                                <TableRow key={notice.id}>
                                    <TableCell>{notice.id}</TableCell>
                                    <TableCell style={{ width: "75%" }}>
                                        <Link
                                            to={`/Notice/${notice.id}`}
                                            className="Buttons-link"
                                            style={{ textDecoration: "none" }}
                                        >
                                            {notice.title}
                                        </Link>
                                    </TableCell>
                                    <TableCell>{notice.userID.split("@")[0]}</TableCell>
                                    <TableCell>{notice.write_date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>

                <CardContent>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <FormControl style={{ marginRight: "16px" }}>
                            <Select
                                value={searchOption}
                                onChange={handleSearchOptionChange}
                            >
                                <MenuItem value="title">제목</MenuItem>
                                <MenuItem value="author">작성자</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            placeholder="검색어 입력"
                            value={searchKeyword}
                            onChange={(e) => setSearchKeyword(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleSearch}
                            style={{ marginLeft: "16px" }}
                        >
                            검색
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Alerts;
