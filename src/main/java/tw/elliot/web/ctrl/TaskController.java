package tw.elliot.web.ctrl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import tw.elliot.model.Task;
import tw.elliot.repo.TaskRepo;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {
	@Autowired
	private TaskRepo taskRepo;

	@GetMapping("/")
	public List<Task> loadAll() {
		return this.taskRepo.findAll();
	}

	@PostMapping(path = "/", consumes = "application/json", produces = "application/json")
	public Task save(@RequestBody Task task) {
		return this.taskRepo.save(task);
	}

	@DeleteMapping("/{oid}")
	public Boolean delete(@PathVariable String oid) {
		System.out.println(oid);
		this.taskRepo.deleteById(oid);
		return Boolean.TRUE;
	}
}
