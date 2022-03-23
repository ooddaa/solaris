import Form from "./Form/Form";
import Chat from "./Chat/Chat";
import Dropzone from "./Dropzone/Dropzone";

function AppWidgets({ handleDropzoneFiles }) {
  return (
    <div className="App-widgets">
      <Dropzone handleDropzoneFiles={handleDropzoneFiles}/>
      <Form/>
      <Chat/>
    </div>
  );
}

export default AppWidgets;
