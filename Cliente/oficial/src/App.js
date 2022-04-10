import FormularioSignIn from "./componentes/FormularioSignIn";
import SignInSide from "./componentes/NotAprovedSignInSide";
import FormularioCliente from "./componentes/FormularioCliente";

import { Box, List, ListItem, ListItemIcon } from "@material-ui/core";


function App() {
  return (
    <Box
      role="presentation"     
    >
     <List>
       <ListItem>
         <ListItemIcon>
          <h2>Cantilever</h2>
         </ListItemIcon>
         <ListItemIcon>
          <h2>Cantilever</h2>
         </ListItemIcon>                
       </ListItem>
     </List>


    </Box>        
  );
}

export default App;
