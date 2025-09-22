// Install the assemblyai package by executing the command "npm install assemblyai"

import { AssemblyAI, SpeechModel } from "assemblyai";

const client = new AssemblyAI({
apiKey: "b84dbfe32f8f4add9f3c27b80e297025",
});

// const audioFile = "./local_file.mp3";
const audioFile = 'https://assembly.ai/wildfires.mp3'

const params = {
audio: audioFile,
speech_model: SpeechModel.Universal,
};

const run = async () => {
const transcript = await client.transcripts.transcribe(params);

console.log(transcript.text);
};

run();