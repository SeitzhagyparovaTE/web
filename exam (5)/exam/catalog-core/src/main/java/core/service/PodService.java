package core.service;

import core.model.Pod;

import java.util.List;

public interface PodService {
    List<Pod> getAllActors();
    List<Pod> getAllAvailableActors();
}
