import React, {useEffect, useState} from "react";
import {
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form
} from "reactstrap";
import './Kdas.css';
import DashboardCard from "../../../components/shared/DashboardCard";
import {Navigate} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";   // 추가
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Autoplay])   // 추가
const questions = [
    {
        question: "1. found it hard to wind down.",
        options: ["0", "1", "2", "3"],
        name: "question1",
        category: "stress"
    },
    {
        question: "2. 입이 바싹 마르는 느낌이 들었다.",
        options: ["0", "1", "2", "3"],
        name: "question2",
        category: "anxiety"
    },
    {
        question: "3. 어떤 것에도 긍정적인 감정을 느낄 수가 없었다.",
        options: ["0", "1", "2", "3"],
        name: "question3",
        category: "depression"
    },
    {
        question: "4. 숨쉬기가 곤란한 적이 있었다\n" +
            "(심하게 호흡이 가쁘거나 가만히 있을 때도 호흡 곤란이 있었다).",
        options: ["0", "1", "2", "3"],
        name: "question4",
        category: "anxiety"
    },
    {
        question: "5. 무엇인가를 시작하는 것이 어려웠다.",
        options: ["0", "1", "2", "3"],
        name: "question5",
        category: "depression"
    },
    {
        question: "6. 어떤 상황에 과잉 반응을 보이는 경향이 있었다.",
        options: ["0", "1", "2", "3"],
        name: "question6",
        category: "stress"
    },
    {
        question: "7. 몸이 떨리는 것을 느꼈다(예: 손 떨림)",
        options: ["0", "1", "2", "3"],
        name: "question7",
        category: "anxiety"
    },
    {
        question: "8. 모든 일에 신경을 너무 많이 쓴다고 느꼈다.",
        options: ["0", "1", "2", "3"],
        name: "question8",
        category: "stress"
    },
    {
        question: "9. 내가 너무 당황해서 웃음거리가 될까 봐 걱정했다.",
        options: ["0", "1", "2", "3"],
        name: "question9",
        category: "anxiety"
    },
    {
        question: "10. 나는 기대할 것이 아무것도 없다는 생각이 들었다. ",
        options: ["0", "1", "2", "3"],
        name: "question10",
        category: "depression"
    },
    {
        question: "11. 자꾸 초조해졌다.",
        options: ["0", "1", "2", "3"],
        name: "question11",
        category: "stress"
    },
    {
        question: "12. 나는 진정하는 것이 어려웠다.",
        options: ["0", "1", "2", "3"],
        name: "question12",
        category: "stress"
    },
    {
        question: "13. 기운이 처지고 우울했다.",
        options: ["0", "1", "2", "3"],
        name: "question13",
        category: "depression"
    },
    {
        question: "14. 내가 하는 일에 방해가 되는 것을 용납할 수 없었다.",
        options: ["0", "1", "2", "3"],
        name: "question14",
        category: "stress"
    },
    {
        question: "15. 자신이 심한 불안상태까지 도달했음을 느꼈다",
        options: ["0", "1", "2", "3"],
        name: "question15",
        category: "anxiety"
    },
    {
        question: "16. 어떤 것에도 몰두 할 수가 없었다",
        options: ["0", "1", "2", "3"],
        name: "question16",
        category: "depression"
    },
    {
        question: "17. 나는 사람으로서 가치가 없다고 느꼈다.",
        options: ["0", "1", "2", "3"],
        category: "depression"
    },
    {
        question: "18. 내가 꽤 신경질적이라고 느꼈다.",
        options: ["0", "1", "2", "3"],
        name: "question18",
        category: "stress"
    },
    {
        question: "19. 가만히 있을 때에도 심장이 두근거리는 것이 느껴졌다\n" +
            "(예: 심장이 심하게 빨리 뛰는 느낌, 불규칙한 심장 박동)",
        options: ["0", "1", "2", "3"],
        name: "question19",
        category: "anxiety"
    },
    {
        question: "20. 아무 이유 없이 무서움을 느꼈다.",
        options: ["0", "1", "2", "3"],
        name: "question20",
        category: "anxiety"
    },
    {
        question: "21. 산다는 것이 의미가 없다는 생각이 들었다",
        options: ["0", "1", "2", "3"],
        name: "question21",
        category: "depression"
    }
];


function Kdas() {
    const [responses, setResponses] = useState(new Array(questions.length).fill(undefined));
    const [submitted, setSubmitted] = useState(false);
    const [jwtToken, setJwtToken] = useState(''); // JWT 토큰 상태 변수
    const [scores, setScores] = useState({});
    const [categoryScores, setCategoryScores] = useState({});

    const calculateScoresByCategory = () => {
        const updatedCategoryScores = {};
        const updatedScores = {};

        questions.forEach((question, index) => {
            const category = question.category;
            const responseValue = parseInt(responses[index] || 0);

            if (!updatedCategoryScores[category]) {
                updatedCategoryScores[category] = 0;
            }

            updatedCategoryScores[category] += responseValue*2;
        });

        Object.keys(updatedCategoryScores).forEach(category => {
            updatedScores[category] = updatedCategoryScores[category];
        });

        setScores(updatedScores);
        setCategoryScores(updatedCategoryScores);
    };



    const checkSurveyToServer = () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`
            },
            mode: 'cors'
        };

        fetch('http://localhost:8080/survey/check', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log('Survey submission status:', data);

                if (data.submitted) {
                    Navigate('/main');
                } else {
                    Navigate('/survey');
                }
            })
            .catch(error => {
                console.error('Error checking survey submission status:', error);
            });
    };

    const sendCategoryScoresToServer = () => {
        const jwtToken = localStorage.getItem('accessToken');
        console.log(JSON.stringify(categoryScores));
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`,
            },
            body: JSON.stringify(categoryScores),
            mode: 'cors'
        };

        fetch('http://localhost:8080/survey/update', requestOptions)
            .then(response => response)
            .then(data => {
                console.log('Category scores submitted:', data);
            })
            .catch(error => {
                console.error('Error submitting category scores:', error);
            });
    };

    const isQuestionsAnswer = responses.length === questions.length;
    const ResponsesValid = !responses.includes(undefined);

    const handleSubmit = () => {
        if (!isQuestionsAnswer || !ResponsesValid) {
            alert("응답하지 않은 항목이 있습니다.");
        } else {
            alert("설문 제출이 완료되었습니다. 감사합니다.");
            calculateScoresByCategory();
            setSubmitted(true);
        }

    };
    useEffect(() => {
        if (submitted) {
            sendCategoryScoresToServer(); // 상태 업데이트 후에 서버로 전송
        }
    }, [submitted]);


    const handleResponseChange = (index, value) => {
        const newResponses = [...responses];
        newResponses[index] = value;
        setResponses(newResponses);
        setSubmitted(false);
    };

    return (
        <DashboardCard>
            <Row>
                <Col>
                    <Card>
                        <CardTitle tag="h1" className="custom-card-title">
                            Depression, Anxiety and Stress Scale (DASS)21
                        </CardTitle>
                        <p>
                            Please read each statement and circle a number 0, 1, 2 or 3 which indicates how much the statement
                            applied to you over the past week. There are no right or wrong answers. Do not spend too much
                            time on any statement.
                        </p>
                        <h2>▶ The rating scale is as follows: </h2>
                        <h3>
                            0 → Did not apply to me at all<br />
                            1 → Applied to me to some degree, or some of the time<br />
                            2 → Applied to me to a considerable degree or a good part of time<br />
                            3 →  Applied to me very much or most of the time
                        </h3>
                                <Swiper
                                    className="banner"
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    breakpoints={{
                                        // when window width is >= 320px
                                        320: {
                                            slidesOffsetBefore: 0,
                                            slidesPerView: 1,
                                            spaceBetween: 8,
                                            centeredSlides: false,
                                        },
                                        // when window width is >= 480px
                                        480: {
                                            slidesOffsetBefore: 0,
                                            slidesPerView: 1,
                                            spaceBetween: 8,
                                            centeredSlides: false,
                                        },
                                        // when window width is >= 640px
                                        640: {
                                            slidesOffsetBefore: 0,
                                            slidesPerView: 1,
                                            spaceBetween: 8,
                                            centeredSlides: false,
                                        }
                                        }}
                                >
                                    {questions.map((q, index) => (
                                        <SwiperSlide>
                                            <fieldset key={index}>
                                                <p><b><hm>{q.question}</hm></b></p>
                                                {q.options.map((option, optionIndex) => (
                                                    <label key={optionIndex} htmlFor={`radio${index}-${optionIndex}`}>
                                                        <input
                                                            type="radio"
                                                            id={`radio${index}-${optionIndex}`}
                                                            name={q.name}
                                                            value={option}
                                                            onChange={() => handleResponseChange(index, option)}
                                                            style={{ width: "20px", height: "20px", marginRight: "8px" }}
                                                        />
                                                        {option}
                                                    </label>
                                                ))}
                                            </fieldset>
                                        </SwiperSlide>
                                    ))}
                                    <SwiperSlide>
                                        <div className="custom-button-container">
                                            <div>
                                                <Button
                                                    className="custom-button"
                                                    onClick={handleSubmit}
                                                    disabled={submitted} // 이미 제출한 경우 버튼 비활성화
                                                    style={{ display: 'block', marginTop: '80px', fontSize:'x-large'}} // 가운데 정렬 스타일 추가
                                                >
                                                    제출
                                                </Button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            {submitted && (
                                <div>
                                    <h4>항목별 점수</h4>
                                    <ul>
                                        {Object.keys(scores).map((category, index) => (
                                            <li key={index}>{category}: {scores[category]}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                    </Card>
                </Col>
            </Row>
        </DashboardCard>
    )
}

export default Kdas;
