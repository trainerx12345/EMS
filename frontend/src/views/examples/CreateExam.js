import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from 'react-copy-to-clipboard';
// reactstrap components
import {
	CardBody,
	Container,
	Button,
	Card,
	CardHeader,
	CardTitle,
	FormGroup,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Row,
	Col,
	UncontrolledTooltip,
	ButtonGroup,
} from 'reactstrap';
// core components
import Header from 'components/Headers/Header.js';
import { newExam } from '../../redux/reducers/examSlice';

const CreateExam = () => {
	const stateExam = useSelector((state) => state.exam);
	const dispatch = useDispatch();
	const [isVisible, setIsVisible] = useState({
		section: false,
		question: false,
		option: false,
	});
	// useEffect(() => {}, [stateExam]);

	const [btnName, setBtnName] = useState({
		section: 'New Section',
	});

	const [states, setStates] = useState({
		//TODO: Exam Contents
		examTitle: '',
		authorId: localStorage.getItem('userId'),
		examSections: [],
		examDescription: '',

		//TODO: Sections Contents
		currentSectionsTitle: '',
		currentSectionsDescription: '',

		currentSectionObject: {
			sectionsTitle: '',
			sectionsDescription: '',
			questions: [],
		},

		currentQuestionsObject: {
			questions: '',
			options: [],
			answer: -1,
		},

		currentOption: '',
		currentQuestion: '',

		//TODO: Questions Contents
		questions: [],
		typeId: '',
		answerId: '',
		questionsChoices: [],
		questionTitle: '',

		//TODO: Choices Contents
		choiceTitle: '',

		//TODO: Answer Contents
		answerTitle: '',

		//TODO: Types Contents
		typeDescription: '',
		typeTitle: '',
		ans: '',
	});

	const answerSelected = (e) => {
		console.log(e.target.value);
		let currentQuestionsobject = states.currentQuestionsObject;

		currentQuestionsobject.answer = e.target.value;
		setStates({ ...states, currentQuestionsObject: currentQuestionsobject });
		console.log(states);
	};
	//TODO: Add Sections
	const addSection = (e) => {
		if (e.target.innerText === 'New Section') {
			if (states.examTitle === '' && states.examDescription === '') {
				setIsVisible({
					...isVisible,
					section: false,
					question: false,
					option: false,
				});
				resetStateSections();
				alert('Please Fill up the exam title or exam Description');
				return;
			} else {
				setIsVisible({
					...isVisible,
					section: true,
					question: true,
					option: true,
				});
				setBtnName({
					...btnName,
					section: 'Save Section',
					question: 'Save Question',
					option: 'Save Option',
				});
			}
		} else if (e.target.innerText === 'Save Section') {
			let currentState = states;
			if (
				states.examTitle !== '' &&
				states.examDescription !== '' &&
				states.currentSectionsTitle !== '' &&
				states.currentSectionsDescription !== '' &&
				states.questions.length !== 0 &&
				states.questionsChoices.length !== 0
			) {
				let currentObj = { ...states.currentSectionObject };
				currentObj.sectionsTitle = currentState.currentSectionsTitle;
				currentObj.sectionsDescription =
					currentState.currentSectionsDescription;

				currentState.currentSectionObject = currentObj;

				currentState.examSections.push(currentObj);

				setStates({ ...states, currentState });
				resetStateSections();
				console.log(states, 'SEctions2');
			} else if (
				states.examTitle !== '' &&
				states.examDescription !== '' &&
				(states.currentSectionsTitle === '' ||
					states.currentSectionsDescription === '')
			) {
				alert('Error fill up the Sections');
				return;
			} else {
				alert('Please Fill up the Question and add an option');
				return;
			}
		}
	};
	//TODO: Reset StatesSections
	const resetStateSections = () => {
		setStates({
			...states,
			currentSectionsTitle: '',
			currentSectionsDescription: '',

			currentSectionObject: {
				sectionsTitle: '',
				sectionsDescription: '',
				questions: [],
			},
			currentQuestionsObject: {
				questions: '',
				options: [],
				answer: -1,
			},

			currentOption: '',
			currentQuestion: '',
			questions: [],
			questionChoices: [],
		});

		setIsVisible({
			...isVisible,
			section: false,
			question: false,
			option: false,
		});

		setBtnName({
			...btnName,
			section: 'New Section',
		});
	};

	//TODO: Clear Question
	const clearQuestionState = () => {
		setStates({
			...states,
			currentQuestionsObject: {
				questions: '',
				options: [],
				answer: -1,
			},

			currentOption: '',
			currentQuestion: '',
		});
	};

	//TODO: Add Option
	const addOption = (e) => {
		console.log(states.currentOption);
		if (states.currentOption === '') {
			alert('Please fill the Option');
			return;
		} else if (states.currentQuestion === '') {
			alert('Please fill the Question');
			return;
		}

		let currentstate = states;
		if (states.currentOption !== '') {
			let currentObj = {
				...states.currentQuestionsObject,
			};
			currentstate.questionsChoices.push(states.currentOption);
			currentObj.options.push(states.currentOption);

			setStates({ ...states, currentstate });
			setStates({ ...states, currentOption: '' });
			console.log(states);
		}
	};

	//TODO: Add Question
	const addQuestion = (e) => {
		if (states.currentQuestion === '') {
			alert('Please fill up the Question');
			return;
		}

		if (
			states.currentQuestionsObject.options.length >= 4 &&
			states.currentQuestion !== '' &&
			states.currentQuestionsObject.answer !== -1
		) {
			let question = states.questions;
			let sectionQuestion = states.currentSectionObject.questions;
			let questionObject = states.currentQuestionsObject;
			questionObject.questions = states.currentQuestion;

			question.push(questionObject);
			sectionQuestion.push(questionObject);
			setStates({ ...states, questions: question });
			console.log(states);
			clearQuestionState();
		} else if (states.currentQuestionsObject.options.length < 4) {
			alert('Please fill the atleast 4 options');
			return;
		} else if (states.currentQuestionsObject.answer === -1) {
			alert('Please Select an answer');
			return;
		}
	};

	//TODO: Remove Option
	const onClickRemoveOption = (oid) => {
		let currstate = states;
		let currentObj = states.currentQuestionsObject.options;
		currentObj.splice(oid, 1);
		setStates({ ...states, currstate });
	};

	//TODO: Add Exam
	const addExam = async (e) => {
		let exams = {
			title: states.examTitle.toUpperCase(),
			description: states.examDescription,
			authorId: states.authorId,
			sections: states.examSections,
		};
		await dispatch(newExam({ exams: exams }));
		const data = await stateExam;
		alert('You have successfully Create an exam');
		window.location.reload();
	};
	return (
		<>
			<Header />
			{/* Page content */}
			<Container
				className='mt--9'
				fluid
			>
				<Card xl='6'>
					<Row>
						<Col className='w-50 mx-auto container'>
							<Card className='shadow '>
								<CardBody>
									<CardTitle className='bg-transparent display-2 '>
										Create an exam
									</CardTitle>
									<Row className='  d-flex flex-column'>
										<InputGroup className='input-group-alternative mb-3'>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText>
													<i className='ni ni-paper-diploma' />
												</InputGroupText>
											</InputGroupAddon>
											<Input
												type='text'
												name='examTitle'
												id='examTitle'
												value={states.examTitle}
												onChange={(e) =>
													setStates({ ...states, examTitle: e.target.value })
												}
												className='text-break p-1'
												placeholder='Exam Title'
											/>
										</InputGroup>
										<InputGroup className='input-group-alternative mb-3'>
											<InputGroupAddon addonType='prepend'>
												<InputGroupText>
													<i className='ni ni-box-2' />
												</InputGroupText>{' '}
											</InputGroupAddon>
											<Input
												type='text'
												name='examDescription'
												id='examDescription'
												value={states.examDescription}
												onChange={(e) =>
													setStates({
														...states,
														examDescription: e.target.value,
													})
												}
												className='text-break p-1'
												placeholder='Exam Description'
											/>
										</InputGroup>
										<div className='text-center m-3'>
											<Button
												type='Button'
												color='primary'
												onClick={addSection}
											>
												{btnName.section}
											</Button>
										</div>
										{isVisible.section ? (
											<div className=' mt-3 d-flex flex-column'>
												<InputGroup className='input-group-alternative mb-3 '>
													<InputGroupAddon addonType='prepend'>
														<InputGroupText>
															<i className='ni ni-paper-diploma' />
														</InputGroupText>
													</InputGroupAddon>
													<Input
														name='section'
														id='section'
														value={states.currentSectionsTitle}
														onChange={(e) =>
															setStates({
																...states,
																currentSectionsTitle: e.target.value,
															})
														}
														placeholder='Section Title'
													/>
												</InputGroup>
												<InputGroup className='input-group-alternative mb-3 '>
													<InputGroupAddon addonType='prepend'>
														<InputGroupText>
															<i className='ni ni-paper-diploma' />
														</InputGroupText>
													</InputGroupAddon>
													<Input
														name='section'
														id='section'
														value={states.currentSectionsDescription}
														onChange={(e) =>
															setStates({
																...states,
																currentSectionsDescription: e.target.value,
															})
														}
														placeholder='Section Description or Instructions'
													/>
												</InputGroup>
											</div>
										) : null}
										{isVisible.question &&
										states.currentSectionsTitle !== '' &&
										states.currentSectionsDescription !== '' ? (
											<div className=' mt-3 d-flex flex-column'>
												<div className='d-flex mx-auto'>
													<h5>Questions</h5>
												</div>
												<InputGroup className='input-group-alternative'>
													<InputGroupAddon addonType='prepend'>
														<InputGroupText>
															<i className='ni ni-active-40' />
														</InputGroupText>
													</InputGroupAddon>
													<Input
														name='section'
														id='section'
														value={states.currentQuestion}
														onChange={(e) =>
															setStates({
																...states,
																currentQuestion: e.target.value,
															})
														}
														placeholder='Question Title'
													/>
													<InputGroupAddon addonType='append'>
														<Button
															type='Button'
															color='primary'
															onClick={addQuestion}
														>
															{btnName.question}
														</Button>
													</InputGroupAddon>
												</InputGroup>
												{isVisible.option ? (
													<div className=' mt-3 d-flex flex-column'>
														<ul className='list-group'>
															{states.currentQuestionsObject.options.map(
																(option, id) => {
																	return (
																		<InputGroup className='w-100 mb-3'>
																			<li
																				key={id}
																				className='list-group-item w-75'
																			>
																				{option}
																			</li>
																			<InputGroupAddon addonType='append'>
																				<Button
																					type='Button'
																					color='warning'
																					onClick={() =>
																						onClickRemoveOption(id)
																					}
																				>
																					Del
																				</Button>
																			</InputGroupAddon>
																		</InputGroup>
																	);
																},
															)}
														</ul>

														<InputGroup className='input-group-alternative mb-3'>
															<InputGroupAddon addonType='prepend'>
																<InputGroupText>
																	<i className='ni ni-active-40' />
																</InputGroupText>
															</InputGroupAddon>
															<Input
																name='option'
																id='option'
																value={states.currentOption}
																onChange={(e) =>
																	setStates({
																		...states,
																		currentOption: e.target.value,
																	})
																}
																placeholder='Option Sample'
															/>
															<InputGroupAddon addonType='append'>
																<Button
																	type='Button'
																	color='primary'
																	onClick={addOption}
																>
																	{btnName.option}
																</Button>
															</InputGroupAddon>
														</InputGroup>
														<div className='w-50 mx-auto '>
															Select answer:
															<br />
															<select
																className='text-bg-info'
																onChange={answerSelected}
															>
																<option value='-1'>---</option>
																{states.currentQuestionsObject.options.map(
																	(op, id) => (
																		<option
																			key={id}
																			value={id}
																		>
																			{op}
																		</option>
																	),
																)}
															</select>
														</div>
													</div>
												) : null}
											</div>
										) : null}
										{states.currentSectionObject.questions.length
											? states.currentSectionObject.questions.map(
													(_questionItem, _index) => {
														return (
															<div className=' bg-black p-5'>
																<h2>{_questionItem.questions}</h2>
																<br />
																{_questionItem.options.map(
																	(_options, _optionIndex) => {
																		return (
																			<div>
																				<div
																					className='btn-group-vertical'
																					role='group'
																					aria-label='Basic radio toggle Button group'
																				>
																					<Input
																						type='radio'
																						className='btn-check'
																						name='btnradio'
																						id={_optionIndex + _options}
																						autoComplete='off'
																					/>
																					<label
																						className='btn btn-primary'
																						htmlFor={_optionIndex + _options}
																					>
																						{_options}
																					</label>
																				</div>
																			</div>
																		);
																	},
																)}
															</div>
														);
													},
											  )
											: null}
									</Row>
								</CardBody>
							</Card>
						</Col>
						{/* PREVIEW */}
						<div className='w-50  container  h-auto bg-black'>
							<div className=' container-fluid'>
								<CardTitle className='bg-transparent display-2 m-3 '>
									Preview
								</CardTitle>
								<h1 className='text-center display-3 fw-bold text-uppercase'>
									{states.examTitle}
								</h1>
								<h3 className='text-center fst-italic '>
									{states.examDescription}
								</h3>
								{states.examSections.length
									? states.examSections.map((item, index) => {
											return (
												<div className=' p-1 container'>
													<br />
													<h2
														key={index + 'sectionsTitle'}
														name={index + 'sectionsTitle'}
														id={index + 'sectionsTitle'}
														className='m-0 fw-bold text-capitalize'
													>
														{item.sectionsTitle}
													</h2>
													<h5
														key={index + 'sectionsDescription'}
														name={index + 'sectionsDescription'}
														id={index + 'sectionsDescription'}
														className='m-0'
													>
														{item.sectionsDescription}
													</h5>
													{item.questions.map((_questionItem, _index) => {
														return (
															<>
																<p className='bg-white p-1 my-2'>
																	{_questionItem.questions}
																</p>
																{_questionItem.options.map(
																	(_options, _optionIndex) => {
																		return (
																			<div>
																				<div
																					className='btn-group-vertical p-1'
																					role='group'
																					aria-label='Basic radio toggle Button group'
																				>
																					<Input
																						type='radio'
																						className='btn-check'
																						name='btnradio'
																						id={_optionIndex + _options}
																						autoComplete='off'
																					/>
																					<label
																						className='btn btn-outline-primary'
																						htmlFor={_optionIndex + _options}
																					>
																						{_options}
																					</label>
																				</div>
																			</div>
																		);
																	},
																)}
															</>
														);
													})}
												</div>
											);
									  })
									: null}
							</div>
							<div className='text-center m-3'>
								<Button
									type='Button'
									color='primary'
									onClick={addExam}
								>
									Save Exam
								</Button>
							</div>
						</div>
					</Row>
				</Card>
			</Container>
		</>
	);
};

export default CreateExam;
