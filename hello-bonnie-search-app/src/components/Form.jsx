// src/Form.jsx
import React, { useState, useContext } from 'react';
import { PostalCodeContext } from '../context/PostalCodeContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Container, Input, Title, Group, Button, AppShell, useMantineTheme, Flex, Text, Grid, TextInput, PillsInput, Pill, Select, Box } from '@mantine/core';
import '../styles/Form.modules.scss';



const Form = () => {
	// =Mantine theme ->
	const theme = useMantineTheme();
	const cardStyles = {
		backgroundColor: theme.colors.dark[0],
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
	};

	const [postalCodeZIP, setPostalCodeZIP] = useState('');
	const [postalCodeCountry, setPostalCodeCountry] = useState('');
	const [showFavorites, setShowFavorites] = useState(false);
	const { fetchPostalData } = useContext(PostalCodeContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (postalCodeZIP.trim() !== '' && postalCodeCountry.trim() !== '') {
			fetchPostalData(postalCodeZIP, postalCodeCountry);
		}
	};

	const toggleShowFavorites = () => {
		setShowFavorites(!showFavorites);
	};

	const favoriteResults = JSON.parse(localStorage.getItem('favoriteResults')) || [];

	return (
		<Flex
			mt='xl'
			pl='xl'
			pr='xl'
			pb='xl'
			pt='xl'
			gap="xl"
			justify="flex-start"
			align="flex-start"
			direction='column'		
			>
			<form onSubmit={handleSubmit}>
				<Flex gap="md"
					justify="flex-start"
					align="flex-start"
					direction="row"
					wrap="nowrap"
				>


					<TextInput size="xl"
						radius="xl"
						c={theme.colors.dark[3]}
						tt="uppercase"
						onChange={(e) => setPostalCodeZIP(e.target.value)}
						placeholder="Enter ZIP code"
						label="Postal code"
					// description="Search for the locations details based on postal code."
					/>
					<Select
						c={theme.colors.dark[3]}
						tt="uppercase"
						size="xl"
						radius="xl"
						label="Select Country"
						value={postalCodeCountry}
						data={['DE', 'US']}

						onChange={setPostalCodeCountry}
					/>
					{/* <Pill.Group>
						<Pill value="us">USA</Pill>
						<Pill value="de">Germany</Pill>
						</Pill.Group>
					</PillsInput> */}

				</Flex>
				<Flex
					direction="row"
					justify='space-between'
					gap='md'
					mt='xl'>
					<Button type="submit" size="xl" radius="xl" bg={theme.colors.dark[2]}
					>Search</Button>
					<Button type="button" size="xl" radius="xl" bg={theme.colors.dark[2]} onClick={toggleShowFavorites}>
						{showFavorites ? <FaHeart color="red" /> : <FaRegHeart />}
					</Button>

				</Flex>
			</form>
			{showFavorites && (
				<div>
					{favoriteResults.length === 0 ? (
						<Text>No favorite locations in your listing</Text>
					) : (
						favoriteResults.map((result, index) => (
							<div key={index} className="card">
								<Title className='title-color' order={2}>Postal Code: {result['post code']}</Title>
								<Title order={3}>Country: {result.country} ({result['country abbreviation']})</Title>
								<div>
									{result.places.map((place, idx) => (
										<div key={idx}>
											<Title order={4}>City: {place['place name']}</Title>
											<Text>State: {place.state} ({place['state abbreviation']})</Text>
											<Text>Latitude: {place.latitude}</Text>
											<Text>Longitude: {place.longitude}</Text>
										</div>
									))}
								</div>
							</div>
						))
					)}
				</div>
			)}
		</Flex>
	);
};

export default Form;
