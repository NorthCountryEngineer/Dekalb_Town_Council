# Dekalb Town Council

## Project Overview

The Dekalb Town Council project is a community-focused web application built with TypeScript and React, primarily intended to streamline communication, increase transparency, and provide information to residents of the Dekalb Town Council.

Key features of this application include:

- User Authentication: Implemented using AWS Amplify and Cognito, users can sign up, log in, and verify their accounts with their email addresses. 
- User Metadata: User-specific data such as email and name are stored as custom attributes within Cognito, with the capability for other users to query for these attributes. 
- Homepage and Calendar: An interactive homepage displays a static background image and a personal image of the current user with their name annotated on an animated line. The Calendar component shows relevant community events.

## Technology Stack

- Frontend: React (TypeScript)
- Styling: Material-UI
- State Management: React hooks
- Authentication: AWS Amplify and AWS Cognito
- Backend: AWS Amplify

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js and npm
- AWS account
- AWS Amplify CLI

### Installation

1. Clone the repository: `git clone https://github.com/NorthCountryEngineer/Dekalb_Town_Council.git`
2. Navigate into the project directory: `cd Dekalb_Town_Council`
3. Install dependencies: `npm install`
4. Initialize Amplify: `amplify init`
5. Deploy Amplify resources: `amplify push`
6. Run the application: `npm start`

The application will run on `localhost:3000`.

## Contributing

We welcome contributions from the community. If you wish to contribute, please follow the steps below:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Contact

For any questions or concerns, please reach out to Eric at eric@northcountryengineer.com.

## License

This project is licensed under the MIT License.
