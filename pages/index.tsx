import { GetStaticProps } from 'next'
import { Button, Group, Text } from "@mantine/core";
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Database from '../middleware/mongoose'
import Test, { TestType } from '../models/Test'



export default function Home({ error, tests }: { error: boolean, tests: TestType[] }) {
  return (
    <>
      <ColorSchemeToggle />
      <Group mt={50} position="center">
      { error ? <Text m={10} align="center" color="red"> Une erreur est survenue  </Text> : <Text m={10} align="center" color="blue"> Vous êtes connecté !</Text>}
      </Group>
      
      {tests ? tests.map((test: TestType, key) => (
        <Group position="center"  key={key}>
          <Text m={10} > Name : {test.name} </Text>
          <Text m={10}> Description : {test.description} </Text>
        </Group> 
        
      )) : <Text m={10} align="center" color="orange"> No data found </Text> }
    </>
  );

}



export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const db = await Database();
    const tests = await Test.find();

    
    return {
      props: {
        tests: JSON.parse(JSON.stringify(tests))
      }
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        error: true
      }
    }
  }
}
