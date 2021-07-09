import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	body: {
		backgroundColor: '#f5f5f5',
	},
	container: {
		border: '1px solid',
		backgroundColor: '#ffffff',
		width: '80%',
		margin: 'auto',
		paddingTop: '2%',
		paddingBottom: '2%',
	},
	textField: {
		margin: '1.5%',
		// fontColor: '#000000',
	},
}));

export default useStyles;
