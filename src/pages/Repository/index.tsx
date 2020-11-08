import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { Header, Repositories as Issues, RepositoryInfo } from './styles'
import logoImg from '../../assets/logo.svg'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'

interface RepositoryParams {
	repository: string
}

interface Repository {
	full_name: string
	description: string
	stargazers_count: number
	forks_count: number
	open_issues_count: number
	owner: {
		login: string
		avatar_url: string
	}
}

interface Issue {
	id: number
	html_url: string
	title: string
	user: {
		login: string
	}
}
const Repository: React.FC = () => {
	const [repository, setRepository] = useState<Repository | null>(null)
	const [issues, setIssues] = useState<Issue[]>([])

	const { params } = useRouteMatch<RepositoryParams>()

	useEffect(() => {
		api.get<Repository>(`repos/${params.repository}`).then((response) => {
			console.log(response.data)
			setRepository(response.data)
		})

		api.get<Issue[]>(`repos/${params.repository}/issues`).then(
			(response) => {
				setIssues(response.data)
			}
		)
	}, [params.repository])

	return (
		<>
			<Header>
				<img src={logoImg} alt="" />
				<Link to="/">
					<FiChevronLeft size={16} />
					Voltar
				</Link>
			</Header>
			{repository && (
				<RepositoryInfo>
					<header>
						<img
							src={repository.owner.avatar_url}
							alt={repository.owner.login}
						/>
						<div>
							<strong> {repository.full_name} </strong>
							<p>{repository.description}</p>
						</div>
					</header>
					<ul>
						<li>
							<strong>{repository.stargazers_count}</strong>
							<p>Stars</p>
						</li>
						<li>
							<strong>{repository.forks_count}</strong>
							<p>Forks</p>
						</li>
						<li>
							<strong>{repository.open_issues_count}</strong>
							<p>Open Issues</p>
						</li>
					</ul>
					<Issues>
						{issues.map((issue) => (
							<a
								key={issue.id}
								href={issue.html_url}
								target="_blank"
								rel="noreferrer"
							>
								<div>
									<strong>{issue.title}</strong>
									<p>{issue.user.login}</p>
								</div>
								<FiChevronRight size={20} />
							</a>
						))}
					</Issues>
				</RepositoryInfo>
			)}
		</>
	)
}

export default Repository
