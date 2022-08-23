import { gql, ApolloServer} from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

let students = [
    {
        'id':0,
        'name':'Arthakorn Narard',
        'friend':'Nattapong Panthaisong'
    },
    {
        'id':1,
        'name':'Nattapong Panthaisong',
        'friend':"Arthakorn Narard"
    },
    {
        'id':2,
        'name':'Veeris Tusaranon',
        'friend':"Arthakorn Narard"
    }
]

const typeDefs = gql`
    type Student {
        id: ID!
        name: String
    }
    
    type Query {
        getStudents :[Student]
    }
`

const resolvers = {
    Query: {
        getStudents: () => {
            return students
        }
    }
}

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers, 
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
})

const startServer = apolloServer.start()

export default async function handler(req, res) {
    await startServer;
    await apolloServer.createHandler({
        path: '/api/graphql'
    })(req, res);
}

export const config = {
    api: {
        bodyParser: false
    }
}