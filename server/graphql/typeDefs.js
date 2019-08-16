const typeDefs = `
scalar DateTime
scalar Json

type User {
    id: ID!
    companyName: String
    firstName: String
    lastName: String
    email: String
    password: String
    phone: String
    city: String
    state: String
    country: String
    postalCode: String
    addressLine1: String
    addressLine2: String
    apiToken: String
    status: Int
    settings: [UserSetting]
    createdAt: DateTime
    updatedAt: DateTime
    deletedAt: DateTime
}

type UserSetting {
    id: ID!
    name: String!
    userId: Int!
    networkType: Int!
    accountKey: String!
    accountSecretKey: String
    accountToken: String
    apiEndpoint: String!
    fromNumber: String!
    segment: String
    extra: Json
    status: Int
    createdAt: DateTime
    updatedAt: DateTime
}

type Network {
    id: ID!
    name: String
    overallScore: Float
    availabilityScore: Float
    averageOperationTime: Float
    failures: Int
    priority: Int
    lowestBandwidth: Float
    averageBandwidth: Float
    highestBandwidth: Float
    status: Int
    events: [NetworkEvent]
    createdAt: DateTime
    updatedAt: DateTime
}

type NetworkEvent {
    id: ID!
    network: Network
    regionType: Int!
    regionDID: String
    regionName: String
    eventUUID: String
    eventMicrotime: Float
    eventType: Int
    operationTime: Float
    score: Float
    requestId: String
    requestBody: Json
    accountId: String
    status: Int
    createdAt: DateTime
    updatedAt: DateTime
}

type NetworkAvailabilityReport {
    networkId: Int!
    networkName: String!
    averageOperationTime: Float
    dayOfWeek: String!
}

type Query {
    network(id: Int!): Network
    networks: [Network]
    networkEventTimeline(eventUUID: String!): [NetworkEvent]
    networkEvents(networkId: Int!): [NetworkEvent]
    user(id: Int!): User
    users: [User]
    userSetting(id: Int): UserSetting
    networkAvailabilityReport: [NetworkAvailabilityReport]
}

input UserInput {
    companyName: String
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    phone: String
    city: String
    state: String
    country: String
    postalCode: String
    addressLine1: String
    addressLine2: String
    apiToken: String
}

input UserSettingInput {
    name: String!
    userId: Int!
    networkType: Int!
    accountKey: String!
    accountSecretKey: String
    accountToken: String
    apiEndpoint: String!
    fromNumber: String!
    segment: String
    extra: Json
    status: Int
}

type Mutation {
    login(email: String!, password: String!): User
    createUser(input: UserInput!): User
    createUserSetting(input: UserSettingInput!): UserSetting
    updateUserSetting(id: ID!, input: UserSettingInput!): UserSetting
}

type Subscription {
    userLoginSuccess: User!
    networkEventCreated: NetworkEvent!
    networkMetricsUpdated: Network!
}
`;

module.exports = typeDefs;
