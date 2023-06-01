import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { siteSettings } from './serviceconfig'
import {Header} from './Components/Header'
import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";
import { useEffect } from 'react';

function App() {

 
  useEffect(()=>{
    const secret_name = "DRC/google_calendar_secret";
  
    const client = new SecretsManagerClient({
      region: "us-east-1",
    });
  
    try {
      const response:any = async() => await client.send(
        new GetSecretValueCommand({
          SecretId: secret_name,
          VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
        })
      )

      const secret = response.SecretString
      console.log(secret)
    } catch (error) {
      // For a list of exceptions thrown, see
      // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
      throw error;
    }
  },[])
  
  
  
  return (
    <div >
        <Header title={siteSettings.HeaderTitle}/>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
