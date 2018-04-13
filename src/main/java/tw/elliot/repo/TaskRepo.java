package tw.elliot.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tw.elliot.model.Task;

@Repository
public interface TaskRepo extends JpaRepository<Task, String> {
}
