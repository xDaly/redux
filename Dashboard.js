// Redux
import { useDispatch, useSelector } from 'react-redux';
import { selectLang, selectConnectedUser } from '../../../../redux/actions/app/appSlice';
import { getUser } from '../../../../redux/actions/app/appAPI';

export default function Dashboard () {
  // Redux Props:
  const lang = useSelector(selectLang);
  const connected_user = useSelector(selectConnectedUser);
  const dispatch = useDispatch();

  // State:
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getUser(lang, setLoading));
  }, []);
  
  return (
    <View style={styles.container}>
      {loading ? <Text>LOADING ...</Text> : <Text>{JSON.stringify(connected_user)}</Text>}
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

