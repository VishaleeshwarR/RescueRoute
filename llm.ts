const response = await fetch('https://serverless.roboflow.com/infer/workflows/civic-issue/custom-workflow-2', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        api_key: '9NnLUfhxelNQFcmIcU5s',
        inputs: {
            "image": {"type": "url", "value": "IMAGE_URL"}
        }
    })
});

const result = await response.json();
console.log(result);
