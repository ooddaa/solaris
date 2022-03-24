import Form from "./Form/Form";
import Chat from "./Chat/Chat";
import Dropzone from "./Dropzone/Dropzone";

function AppWidgets({ handleDropzoneFiles }) {
  return (
    <div className="App-widgets">
      <Dropzone 
        classNames={['app-widgets__dropzone']} 
        handleDrop={handleDropzoneFiles}
        activeMsg={`Drop the files here ...`}
        passiveMsg={`Drag 'n' drop some files here, or click to select files`}
      />
      <Form/>
      <Chat/>
    </div>
  );
}

export default AppWidgets;
