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
        question: "1. 나는 안정을 취하기 힘들었다.",
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
        category: "stress"
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
        category: "anxiety"
    },
    {
        question: "12. 나는 진정하는 것이 어려웠다.",
        options: ["0", "1", "2", "3"],
        name: "question12",
        category: "anxiety"
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
        category: "anxiety"
    },
    {
        question: "17. 나는 사람으로서 가치가 없다고 느꼈다.",
        options: ["0", "1", "2", "3"],
        name: "question17",
        category: "anxiety"
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

            updatedCategoryScores[category] += responseValue;
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
            // No need to include body in a GET request
            mode: 'cors'
        };

        fetch('https://port-0-spring-eu1k2llldpju8v.sel3.cloudtype.app/survey/check', requestOptions)
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
        const jwtToken = localStorage.getItem('token');
        console.log(JSON.stringify(categoryScores));
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${jwtToken}`
            },
            body: JSON.stringify(categoryScores),
            mode: 'cors'
        };

        fetch('https://port-0-spring-eu1k2llldpju8v.sel3.cloudtype.app/survey/update', requestOptions)
            .then(response => response)
            .then(data => {
                console.log('Category scores submitted:', data);
            })
            .catch(error => {
                console.error('Error submitting category scores:', error);
            });
    };

    const handleSubmit = () => {
        if (responses.length !== questions.length || responses.includes(undefined)) {
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
                            우울, 불안 및 스트레스 척도(DASS)21-한글판
                        </CardTitle>
                        <p>
                            지난 한 주 동안, 아래의 문항이 귀하에게 얼마큼 해당되었는지 0, 1, 2, 3번에 동그라미 표시해 주십시오.
                            정답이 있는 것이 아니므로 오래 생각하지 마시고 답해 주시기 바랍니다.
                        </p>
                        <h2>▶ 각 문항에 대해 선택할 수 있는 응답의 의미는 다음과 같습니다.</h2>
                        <h3>
                            0 → 전혀 해당되지 않음<br />
                            1 → 약간 또는 가끔 해당됨<br />
                            2 → 상당히 또는 자주 해당됨<br />
                            3 → 매우 많이 또는 거의 대부분 해당됨
                        </h3>

                        <CardBody>
                            <Form>
                                <Swiper
                                    className="banner"
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                >
                                    {questions.map((q, index) => (
                                        <SwiperSlide>
                                            <hm><fieldset key={index}>
                                                <legend></legend>
                                                <p><b>{q.question}</b></p>
                                                {q.options.map((option, optionIndex) => (
                                                    <label key={optionIndex} htmlFor={`radio${index}-${optionIndex}`}>
                                                        <input
                                                            type="radio"
                                                            id={`radio${index}-${optionIndex}`}
                                                            name={q.name}
                                                            value={option}
                                                            onChange={() => handleResponseChange(index, option)}
                                                        />
                                                        {option}
                                                    </label>
                                                ))}
                                            </fieldset></hm>
                                        </SwiperSlide>
                                    ))}
                                    <div className="custom-button-container">
                                        <Button
                                            className="custom-button"
                                            onClick={handleSubmit}
                                            disabled={submitted} // 이미 제출한 경우 버튼 비활성화
                                        >
                                            제출
                                        </Button>
                                    </div>
                                </Swiper>
                            </Form>

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
                        </CardBody>

                    </Card>
                </Col>
            </Row>
        </DashboardCard>
    )
}

export default Kdas;