import React, { FormEvent, useEffect, useState } from 'react'

import { Title, Form, Repositories, Error } from './styles'
import logoImg from '../../assets/logo.svg'
import { FiChevronRight } from 'react-icons/fi'

import api from '../../services/api'

interface Repository {
	fullname: string
	description: string
	owner: {
		login: string
		avatar_url: string
	}
}

const Dashboard: React.FC = () => {
	const [newRepo, setNewRepo] = useState('')
	const [inputError, setInputError] = useState('')
	const [repositories, setRepositories] = useState<Repository[]>(() => {
		const repositoriesSaved = localStorage.getItem('@Github:repositories')
		if (repositoriesSaved) {
			return JSON.parse(repositoriesSaved)
		}
		return []
	})

	useEffect(() => {
		localStorage.setItem(
			'@Github:repositories',
			JSON.stringify(repositories)
		)
	}, [repositories])

	async function handleRepository(
		event: FormEvent<HTMLFormElement>
	): Promise<void> {
		event.preventDefault()

		if (!newRepo) {
			setInputError('Digite o autor/nome do repositorio')
			return
		}

		try {
			const response = await api.get<Repository>(`/repos/${newRepo}`)

			const repository = response.data
			console.log(repository)
			setRepositories([...repositories, repository])
			setNewRepo('')
			setInputError('')
		} catch (error) {
			setInputError('Erro na busca por esse repositório')
		}
	}
	return (
		<>
			<img src={logoImg} alt="Github Explorer" />
			<Title>Explore repositórios no GitHub</Title>
			<Form hasError={!!inputError} onSubmit={handleRepository}>
				<input
					value={newRepo}
					onChange={(e) => setNewRepo(e.target.value)}
					placeholder="Digite o nome do repositório"
					type="text"
				/>
				<button type="submit">Pesquisar</button>
			</Form>

			{inputError && <Error>{inputError}</Error>}

			<Repositories>
				{repositories.map((repository) => (
					<a key={repository.fullname} href="">
						<img
							src={repository.owner.avatar_url}
							alt={repository.owner.login}
						/>
						<div>
							<strong> {repository.fullname} </strong>
							<p>{repository.description}</p>
						</div>
						<FiChevronRight size={20} />
					</a>
				))}
			</Repositories>
		</>
	)
}

export default Dashboard
