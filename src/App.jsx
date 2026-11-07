import Card from './components/Card'

export const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXE4JeprmNBxG-DYW3u4up0bP9fznkKS3sXrJqjrIsg&s=10",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hour",
    location: "Chennai, India",
  },
  {
    brandLogo: "data:image/png;base64,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",
    companyName: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hour",
    location: "Cupertino, USA",
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAACUCAMAAADyHdbUAAAAb1BMVEUAAACxBg/lCRNeAwi2BhAiAQLoCROrBg+OBQzfCROuBg4XAAN2BAgjAAWmBQ+iBQ8IAADuCRSKAw2CAg2bBA/WCBKVBA7QCBLDBxFXAwhyAgsyAQVlBQlrAgtQAwfKBxIeAgM7AgZGAgX3CRUqAAaESvEpAAAE0ElEQVR4nO2cfY+jIBDG1bqC1IUKlFqvtvv2/T/jgfbF6nO5Sy7ZHRKevycbfuGZYZiyZllSUlJSUlJSUlJSUlJS0s9p9wq0XUZtkXY/sd6VtvVaRfdrEdUItlK++ZEFL7XdV2sVzSKqKfOVShoAb11VrNTKhT2a9fqpALyU9ZqgOrw/R5EGgFuwWBxpgHy9/qItn6NIA7AD2oLnKNIAsgNb8Dk8RZEGYKJeA1TdUxRpgNzugYfqj3kUaYBSlQCg0vMo0gC5dAignDdEtAEEBx6q9sdZFG2AXDG0BXwWRRxAWtROlK+PKOIAzF3AFhSzOkQcIHfIQ+2sDlEHUOgoqOpHFHkAjTz0+biXUQdgjoEcaOU9ijqAsBz1Q4f7vYw8gNLoWlP0tyjqALnkqgVbcPcQeQBmDfLQ5XY1Jg8glIEeul1rIgDgFo5Xri0peQDvIQ1b0utREAUAuta0pymqpw8gtQJpfBuv0AcQ0iEP3cYrEQAwZ6CHzBjVC+oAIQng1Xgar/RiTUAMQChnYB0arzUxAEhrBGonxqtxz+gDeA9pOF4JV+OerQmIAeTMewiMeas6jFeGGACkM3+8Gg+SPoBPAu3QeKV7CwBrAnIATHHYkra+Dg2KPsCYBGK9/qL1dehkJWPkAYKH9qAO7QOA34IIAHiDxivteQIQ5AG8hyQ6Cli2sZY+gM9ipw1Iguqw3bj1FpADCCcB9lDdHz3A8iyjB+BPAmcs6Idae+aBgDzA6CHUkl56HQmA5fBaUzjD3TIJ6AGEQuqMQmnceYBlHSIIIHwh1XC8UhvNrXw+y4gCYA+1ctoC6gDhMDZovFIdGr1MAoIAYxLAOlQUOngoAgBfhxr0eqUShvvDmDqAkGELNLrbH4xe1CGSAMFDvIGvV6yJBgCOV4o8eIg6wHQYa42S4KL9YRwBwLgF8OWBM6EfigMAvl4pFx4iCZAz76E/tBN7E84y6gAhCRwfcviAKBRS+gAhjTcNSmPfks7bIaIAvqGzbviCR0Hw0CMJaAKMaWz7DHpIGR4FgPIAJ9ROdA2fJQFlgGaXVagOaT1LAqIAvpBK5QHQ44+CmVkSUAUIW2B22Rl6yMxOAroATHqAL9BOeA/NCilVgHwCyBzaAmUcfQDvofDr9gb9WnMJSUAfgAWAX/ABkT+Mb1lMFsATjO8L8AMicz8JKAOMb3aPcLzy8BBpgPG9JZy0c33zEF2AXEwAaDrhr8bxAOw+sYckeYB8AsAeslpFA9CgX2tyfc1iygB8AniHZ5m+FtIIAN7ghMvxaACyBo5XrkkQA8AZPiDyhTQWAHg1br2HogGA45Wrh6IA+AL9ULHXo4eiAMhyVIfk6KE4AM6onegiAsgKdDW2Kh4A/L81Lh4APF5xLBoAeDWunYwGIINv2qWNB2CAV2MuogFAX4+pCp8EsQBgD+UqHoDjev1FcbDxAGTo2yu1ZPEAGNQPlTIegBf4eiUigKwDBLUg8pGwfwFA45WqiwjgA748iAhgix9/kAMo73KLr7SZ9q7q9vtrdTjiv/jNermvWoSX082wOZ/Pi4+0ZV+b0+nUGy5FeamrGwgRgPCvM8Pm/XXn9ffw3W67ffs4GetJhr+Hf4P+44uPq09KJiUlJSUlJSUlJSUlJSV9k34DqdFkZpVJBP0AAAAASUVORK5CYII=",
    companyName: "Netflix",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Los Gatos, USA",
  },
  {
    brandLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACUCAMAAABY3hBoAAAAilBMVEWBvAYFpvD/ugjzUyXz8/P79///+fPz/v/y9/8AovD/twDz9fj39fj39fPz9/jzgWufyWrzThufyl9euPH9xl9qufH8yGrzxLzzSxN2twDP4LsAn/C72vL34LvzPwCjzGjz0s3zeWLzopS31ZDa5szzdFmYxlHH3/JQs/CJyPH60or9xVf25Mf605HkQSbDAAABH0lEQVR4nO3aW07CABRF0aog74JSEER5qqDo/KdnpBiBxI/maujH2gM4WQM4SaWkJecG/BZY0UoOS+eLbrBl7WuouuoFmz21D2F305tY024Om42TWOP7E9hVrNE3LOgCAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMLwkax/uumNX8O/toWy3QHW90Gezk6tlXSWrQ0H2pXo+Wusn8USxhY0fawznW4fKgernUI66w3/Vib152s/rbNYm3fW4ewh0kj1qSfw7JmtMcT2EWsxiCHDZuXscDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM4K+7lp/S1s3R8E2x/bPobBsqNjWwkDKxpY0T4BI/E/XjlFIp0AAAAASUVORK5CYII=",
    companyName: "Microsoft",
    datePosted: "3 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hour",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/44/1/nvidia-logo-png_seeklogo-443363.png",
    companyName: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hour",
    location: "Santa Clara, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0HpwNmXWFlzj9jc93MKv78jSOvRtxfe8vKTRdsumXxQ&s=10",
    companyName: "Adobe",
    datePosted: "1 month ago",
    post: "Java Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Noida, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgaswMAQv-oTt2vszmQni5KGAX6Ev_4fEVxv64q3oLZA&s=10",
    companyName: "Oracle",
    datePosted: "5 weeks ago",
    post: "Database Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hour",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmO3NvxWiCNfNaZtN0GcTPruKG4tjHPfCh3X0wQJAePg&s=10",
    companyName: "Salesforce",
    datePosted: "10 weeks ago",
    post: "Full Stack Developer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Pune, India",
  },
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        console.log(idx);
        
        return <div key={idx}>
          <Card company={elem.companyName} post={elem.post} tag1={elem.tag1} tag2={elem.tag2}
        datePosted={elem.datePosted} pay={elem.pay} brandLogo={elem.brandLogo}/>
        </div>
      })}
    </div>
  )
}
export default App