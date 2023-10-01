fetch("http://localhost:3000/date")
  .then((response) => {
    const reader = response.body.getReader();

    return new ReadableStream({
      async start(controller) {
        while (true) {
          const { done, value } = await reader.read();

          if (done) {
            controller.close();
            break;
          }

          // Convert the chunk to a string and process it
          const chunk = new TextDecoder().decode(value);
          console.log(typeof  JSON.parse(chunk));
        }
      },
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
