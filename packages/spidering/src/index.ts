// import got from "got";
import got from "got";

const response = {
  hello: "world",
} as const satisfies { [key: string]: string };

const init = async () => {
  const data = await got
    .post("https://httpbin.org/anything", {
      json: response,
    })
    .json();

  console.log(data);
};

init();
