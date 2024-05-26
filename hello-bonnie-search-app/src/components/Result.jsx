// src/Result.jsx
import React, { useContext, useState, useEffect } from 'react';
import { PostalCodeContext } from '../context/PostalCodeContext';
import { GoXCircle, GoStar, GoStarFill } from "react-icons/go";
import { Card, Image, Text, Badge, Button, Group, useMantineTheme, Flex, ButtonGroup, Pill, Container, Table } from '@mantine/core';
import { DataTable } from 'mantine-datatable';


const Result = () => {
	const { postalData, loading, error, resetPostalData } = useContext(PostalCodeContext);
	const [isFavorite, setIsFavorite] = useState(false);

	const theme = useMantineTheme();
	const cardStyles = {
		backgroundColor: theme.colors.dark[5],
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
	};
	useEffect(() => {
		if (postalData) {
			const favoriteResults = JSON.parse(localStorage.getItem('favoriteResults')) || [];
			const isAlreadyFavorite = favoriteResults.some(result => result['post code'] === postalData['post code']);
			setIsFavorite(isAlreadyFavorite);
		}
	}, [postalData]);

	const toggleFavorite = () => {
		setIsFavorite(!isFavorite);
		let favoriteResults = JSON.parse(localStorage.getItem('favoriteResults')) || [];
		if (!isFavorite) {
			favoriteResults.push(postalData);
		} else {
			favoriteResults = favoriteResults.filter(result => result['post code'] !== postalData['post code']);
		}
		localStorage.setItem('favoriteResults', JSON.stringify(favoriteResults));
	};

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		postalData && (
			<Card
				style={cardStyles}
				color={theme.colors.dark[0]}

				mx="xl"
				radius="xl"
				width="500"
				height="700"
				shadow="md"

			>
				<Card.Section className="card-header">
					<Flex
						gap="md"
						px='xl'
						pt='xl'
						size='xl'
						radius="xl"
						justify="space-between"
						align="center"
						direction='row'
						pb='md'

					>
						<Button size="xl" radius="xl" bg={theme.colors.dark[2]} onClick={toggleFavorite} className="favorite-button">
							{isFavorite ? <GoStarFill color="white" /> : <GoStar />}
						</Button>
						<Button size="xl" radius="xl" bg={theme.colors.dark[2]} onClick={resetPostalData} className="close-button">
							<GoXCircle />
						</Button>
					</Flex>
					<Card.Section
						gap='md'
						mx='xl'
					>
						<Image
							src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
							size='xs'
							radius="xl"

							alt="Location Pin"
						/>
					</Card.Section>
				</Card.Section>
				<Flex direction="row"
					gap="md"
					justify="space-between"
					pt="xl"
					px="lg"
				>
					<Pill bg={theme.colors.dark[4]}>Country:{postalData.country} ({postalData['country abbreviation']})</Pill>
					<Pill bg={theme.colors.dark[4]}>Postal Code: {postalData['post code']}</Pill>
				</Flex>
				<Flex
					direction='column'
					height='xs'
					px="lg"
				>
		
					{postalData.places.map((place, index) => (
						<Flex
							direction='column'
							height='xs'

							key={index}>
							<Flex
								direction="row"
								justify='space-between'>
								<h4>City:</h4><h4>{place['place name']}</h4>
							</Flex>
							<Flex
								direction="row"
								justify='space-between'>
								<h4>State:</h4><h4> {place.state} ({place['state abbreviation']})</h4>
							</Flex>
							<Flex
								direction="row"
								justify='space-between'>
								<h4>Latitude:</h4><h4> {place.latitude}</h4>
							</Flex>
							<Flex
								direction="row"
								justify='space-between'>
								<h4>Longitude:</h4><h4> {place.longitude}</h4>
							</Flex>
						</Flex>
					))}
				</Flex>

			</Card>
		)
	);
};

export default Result;
