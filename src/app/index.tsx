import { View, Text, StyleSheet } from 'react-native';

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>記録</Text>
          <Text style={styles.headerTime}>2023/10/11 10:11</Text>
          <Text style={styles.headerRight}>ログアウト</Text>
        </View>
      </View>

      <View>
        <View style={styles.scheduleItem}>
          <View>
            <Text>▶︎</Text>
          </View>
          <View>
            <Text style={styles.scheduleItemTitle}>掃除</Text>
          </View>
          <View style={styles.scheduleItemTime}>
            <Text style={styles.scheduleItemTimePlan}>予定：00:10:00</Text>
            <Text style={styles.scheduleItemTimeActual}>実績：00:00:05</Text>
          </View>
          <View>
            <Text>×</Text>
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

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#00bfff',
    height: 104,
    justifyContent: 'flex-end',
  },
  headerInner: {
    alignItems: 'center',
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'rgba(255,255,255,0.7)',
  },
  headerTitle: {
    position: 'absolute',
    left: 24,
    bottom: 16,
    lineHeight: 24,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  scheduleItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  scheduleItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  scheduleItemTimePlan: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#00bfff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
});
export default Index;
