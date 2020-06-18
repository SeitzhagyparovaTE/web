package core.repository;

import core.model.Node;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface NodeRepository extends CloudAppRepository<Node, Long> {

    @Query("select a from Node a order by name asc")
    List<Node> getAllNodes();
}
