import { View, Text, StyleSheet } from 'react-native';

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <Text>2023/10/11 10:11</Text>
        <Text>ログアウト</Text>
      </View>
      <View>
        <View>
          <View>
            <Text>▶︎</Text>
          </View>
          <View>
            <Text>掃除</Text>
          </View>
          <View>
            <Text>予定：00:10:00</Text>
            <Text>実績：00:00:05</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>▶︎</Text>
          </View>
          <View>
            <Text>洗濯</Text>
          </View>
          <View>
            <Text>予定：00:10:00</Text>
            <Text>実績：00:00:05</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>▶︎</Text>
          </View>
          <View>
            <Text>運動</Text>
          </View>
          <View>
            <Text>予定：00:10:00</Text>
            <Text>実績：00:00:05</Text>
          </View>
        </View>
      </View>

      <View>
        <Text>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Index;
