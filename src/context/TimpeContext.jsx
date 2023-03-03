import React, { createContext, useState } from 'react';

export const TimpeContext = createContext(undefined);

export const TimpeProvider = (props)  => {
    
	// State which determines whether the Whois or Projects component is rendered. (true = Whois, false = Projects)
	const [whois, setWhois] = useState(true);

	// State which determines whether the Dialog component is rendered. (true = Dialog, false = null)
	// It also holds the data which is passed to the Dialog component.
	const [dialogOpen, setDialogOpen] = useState({
										open: false,
										title: '',
										imgUrl: '',
										description: '',
										stack: '',
										linkdesc: '',
										link: ''
										});

	return (
	<TimpeContext.Provider value={{
									whois, 
									setWhois,
									dialogOpen,
									setDialogOpen
									}}>
								{props.children}
	</TimpeContext.Provider>
	)
}