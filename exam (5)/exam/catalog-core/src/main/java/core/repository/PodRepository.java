package core.repository;

import core.model.Pod;
import org.springframework.stereotype.Repository;

@Repository
public interface PodRepository extends CloudAppRepository<Pod, Long> {
}
