package tw.elliot.repo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit.jupiter.SpringJUnitConfig;
import tw.elliot.config.ApplicationConfig;
import tw.elliot.model.Task;

import java.time.LocalDate;

@SpringJUnitConfig(classes = ApplicationConfig.class)
class TaskRepoTest {

	@Autowired
	private TaskRepo repo;

	@Test
	public void test() {
		Task task = new Task();
		task.setTitle("123");
		task.setDate(LocalDate.now());

		this.repo.save(task);
	}
}