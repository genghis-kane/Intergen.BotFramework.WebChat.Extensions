# Skype web chat control

## A sample of the Skype web chat control.
To run, open `default.html` in a modern browser. The bot points to a demo Skype instance by default. 
To point to your own bot instance, simply replace the `data-bot-id` value with your own Skype embed ID.

## Limitations

### Conversation persistence
The control will remember conversation between page refreshes, but will not display the previous messages.

**Steps to reproduce**
 - Start a conversation:
	 - Hello 
	 - Book an appointment 
	 - Supply a suburb
 - Refresh the page and re-open chat - shows no history
 - Say hello again - picks up conversation from the previous flow but doesn't display any context